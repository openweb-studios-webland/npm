<?php
$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['insights'] = new Timber\PostQuery(
    array(
        'numberposts' => 3,
        'post_type' => 'insight',
        'tax_query' => array(
            array(
                'taxonomy' => 'platform',
                'field' => 'id',
                'terms' => get_the_ID(),
            ),
        ),
    )
);
$term_id = get_queried_object()->term_id;
$context['fields'] = get_fields("term_{$term_id}");

Timber::render('templates/taxonomy-platform/index.twig', $context);
