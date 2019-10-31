<?php

/**
 * Template Name: About
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$args = array(
    'posts_per_page' => 3,
    'post_type' => array(
        'insight',
        'report',
    ),
    'meta_key' => 'appears_on',
    'meta_value' => 'about',
);
$context['insights'] = Timber::get_posts($args);
$context['fields'] = get_fields();

Timber::render('templates/about/index.twig', $context);
