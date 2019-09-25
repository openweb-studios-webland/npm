<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['posts'] = new Timber\PostQuery(
    array(
        'posts_per_page' => 12,
    )
);
$context['fields'] = get_fields();

Timber::render('templates/home.twig', $context);
