<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['posts'] = new Timber\PostQuery(
    array(
        'posts_per_page' => 12,
        'category__in' => get_queried_object_id(),
    )
);
$context['fields'] = get_fields();

Timber::render('templates/home.twig', $context);
