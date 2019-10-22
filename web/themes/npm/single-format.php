<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['insights'] = new Timber\PostQuery(
    array(
        'numberposts' => 3,
        'post_type' => 'insight',
        'meta_query' => array(
            'key' => 'format',
            'value' => '"' . get_the_ID() . '"',
        ),
    )
);
$context['fields'] = get_fields();

Timber::render('templates/single-format/index.twig', $context);
