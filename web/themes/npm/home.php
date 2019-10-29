<?php

$context = Timber::get_context();
$args = array(
    'posts_per_page' => 12,
);
$context['posts'] = new Timber\PostQuery($args);
$context['fields'] = get_fields();

Timber::render('templates/home.twig', $context);
