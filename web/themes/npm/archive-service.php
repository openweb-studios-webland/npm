<?php

/**
 * Template Name: Services (Index)
 */

global $paged;

if (!isset($paged) || !$paged) {
    $paged = 1;
}

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['work_posts'] = new Timber\PostQuery(
    array(
        'posts_per_page' => 9,
        'post_type' => 'work',
        'paged' => $paged,
    )
);
$context['fields'] = get_fields();

if ($paged > 1) {
    Timber::render('templates/archive-service/ajax.twig', $context);
} else {
    Timber::render('templates/archive-service/index.twig', $context);
}
