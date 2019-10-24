<?php

$context = Timber::get_context();
$platforms = Timber::get_terms(array(
    'taxonomy' => 'platform',
));
$context['post'] = new Timber\Post();
$context['formats'] = [];
$context['platforms'] = [];
$context['active_formats'] = get_query_var('format') ? explode(',', get_query_var('format')) : [];
$context['active_platforms'] = get_query_var('platform') ? explode(',', get_query_var('platform')) : [];

foreach ($platforms as $platform) {
    if ($platform->parent === 0 && count($context['active_formats']) > 0) {
        // Formats/top-level
        $platform->active = compareInts(
            $platform->id,
            $context['active_formats'][0]
        );

        array_push($context['formats'], $platform);
    } elseif (count($context['active_platforms']) > 0) {
        // Active platforms
        if (($i = array_search($platform->id, $context['active_platforms'])) !== false) {
            // Active platforms with an active format/parent
            if (compareInts($platform->parent, $context['active_formats'][0])) {
                $platform->active = compareInts(
                    $platform->id,
                    $context['active_platforms'][$i]
                );
                $platform->active_parent = compareInts(
                    $platform->parent,
                    $context['active_formats'][0]
                );

                // Remove current platform from active siblings
                $id = $platform->id;
                $platform->active_siblings = array_filter(
                    $context['active_platforms'],
                    function ($val) use ($id) {
                        return ($val != $id);
                    }
                );
            } else {
                unset($context['active_platforms'][$i]);
            }
        }

        array_push($context['platforms'], $platform);
    }
}

// Compare two integers
function compareInts($num_one, $num_two)
{
    return ((int) $num_one == (int) $num_two ? 1 : 0);
}

// Build query args
$args = array(
    'posts_per_page' => -1,
    'post_type' => 'product',
);

// Append active formats to query
if (count($context['active_formats']) > 0) {
    $args['tax_query'] = array(
        'relation' => 'AND',
        array(
            'taxonomy' => 'platform',
            'field' => 'id',
            'terms' => $context['active_formats'],
        ),
    );
}

// Append active platforms to query
if (count($context['active_platforms']) > 0) {
    array_push($args['tax_query'], array(
        'relation' => 'OR',
        array(
            'taxonomy' => 'platform',
            'field' => 'id',
            'terms' => $context['active_platforms'],
        ),
    ));
}

$context['products'] = new Timber\PostQuery($args);

Timber::render('templates/archive-product/index.twig', $context);
