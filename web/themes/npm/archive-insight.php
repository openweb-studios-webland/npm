<?php

/**
 * Template Name: Insights Archive
 */

global $paged;

$paged = get_query_var('paged') ? get_query_var('paged') : 1;
$context = Timber::get_context();
$args = array(
    'posts_per_page' => 6,
    'post_type' => array(
        'article',
        'report',
    ),
    'paged' => $paged,
    'meta_key' => 'appears_on',
    'meta_value' => 'insights',
);
$context['articles'] = new Timber\PostQuery($args);
$context['fields'] = get_fields();

if ($paged > 1) {
    Timber::render('templates/archive-insight/ajax.twig', $context);
} else {
    Timber::render('templates/archive-insight/index.twig', $context);
}
