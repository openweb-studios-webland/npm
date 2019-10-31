<?php

$context = Timber::get_context();
$args = array(
    'posts_per_page' => 12,
    'category__in' => get_queried_object_id(),
);
$context['posts'] = Timber::get_posts($args);
$context['fields'] = get_fields();

Timber::render('templates/home.twig', $context);
