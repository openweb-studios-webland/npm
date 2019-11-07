<?php

$context = Timber::get_context();
$term_id = get_queried_object()->term_id;
$args = array(
    'posts_per_page' => 3,
    'post_type' => 'article',
    'tax_query' => array(
        array(
            'taxonomy' => 'platform',
            'field' => 'id',
            'terms' => $term_id,
        ),
    ),
);
$context['articles'] = new Timber\PostQuery($args);
$context['fields'] = get_fields("term_{$term_id}");

Timber::render('templates/taxonomy-platform/index.twig', $context);
