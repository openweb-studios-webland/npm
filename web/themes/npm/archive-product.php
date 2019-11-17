<?php

/**
 * Template Name: Products Archive
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$taxonomy = 'platform';
$args = array(
    'taxonomy' => $taxonomy,
    'meta_key' => 'appears_on_products',
    'meta_value' => 1,
);
$platforms = Timber::get_terms($args);
$context['platforms'] = [
    'parents' => [],
    'children' => [],
];

// Get current platforms from query vars
$current_platforms = get_query_var('platforms') ? explode(',', get_query_var('platforms')) : [];
$context['current_platforms'] = [
    'parents' => [],
    'children' => [],
];

foreach ($platforms as $platform) {
    $key = ($platform->parent === 0) ? 'parents' : 'children';

    // Add all platforms to context
    array_push(
        $context['platforms'][$key],
        addToPlatform($platform, $current_platforms, $taxonomy),
    );

    // Add active platforms to context
    if (in_array($platform->slug, $current_platforms)) {
        array_push(
            $context['current_platforms'][$key],
            $platform->slug,
        );
    }
}

function addToPlatform($platform, $current_platforms, $taxonomy)
{
    global $current_platforms;
    $platform->current = null;
    $platform->current_item_parent = null;

    // Set bool for current platforms
    if (in_array($platform->slug, $current_platforms)) {
        $platform->current = true;

        // Remove current platform from other current platforms
        $platform_slug = $platform->slug;
        $platform->current_item_others = array_filter(
            $current_platforms,
            function ($value) use ($platform_slug) {
                return ($value != $platform_slug);
            },
        );
    }

    // Add entire post object for platforms with a parent (only includes ID by default)
    $platform_parent = get_term($platform->parent, $taxonomy);

    if ($platform->parent !== 0) {
        $platform->item_parent = $platform_parent;

        // Set bool for platforms with a current parent
        if (in_array($platform_parent->slug, $current_platforms)) {
            $platform->current_item_parent = true;
        }
    }

    return $platform;
}

// Custom WP query
$args = array(
    'posts_per_page' => -1,
    'post_type' => 'product',
);

if (count($context['current_platforms']['parents']) > 0) {
    $args['tax_query'] = array(
        'relation' => 'AND',
        array(
            'taxonomy' => 'platform',
            'field' => 'slug',
            'terms' => $context['current_platforms']['parents'],
        ),
    );

    if (count($context['current_platforms']['children']) > 0) {
        array_push($args['tax_query'], array(
            'relation' => 'OR',
            array(
                'taxonomy' => 'platform',
                'field' => 'slug',
                'terms' => $context['current_platforms']['children'],
            ),
        ));
    }
}

$context['products'] = new Timber\PostQuery($args);
$context['fields'] = get_fields();

Timber::render('templates/archive-product/index.twig', $context);
