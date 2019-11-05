<?php

/**
 * Template Name: Programs Archive
 */

$context = Timber::get_context();
$categories = Timber::get_terms(array(
    'taxonomy' => 'category',
    'hide_empty' => true,
));
$context['categories'] = [];

foreach ($categories as $category) {
    // WP Query for each category
    $args = array(
        'posts_per_page' => -1,
        'post_type' => 'program',
        'cat' => $category->id,
    );
    $category->programs = Timber::get_posts($args);

    array_push($context['categories'], $category);
}

// Remove "Uncategorized" category
$context['categories'] = array_filter($context['categories'], function ($category) {
    return $category->slug !== 'uncategorized';
});
$context['fields'] = get_fields();

Timber::render('templates/archive-program/index.twig', $context);
