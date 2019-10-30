<?php

/**
 * Template Name: Services (Archive)
 */

global $paged;

$paged = get_query_var('paged') ? get_query_var('paged') : 1;
$context = Timber::get_context();
$args = array(
    'posts_per_page' => 9,
    'post_type' => 'work',
    'paged' => $paged,
);
$context['work'] = new Timber\PostQuery($args);
$context['fields'] = get_fields();

if ($paged > 1) {
    Timber::render('templates/archive-service/ajax.twig', $context);
} else {
    Timber::render('templates/archive-service/index.twig', $context);
}
