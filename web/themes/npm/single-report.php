<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$args = array(
    'posts_per_page' => 4,
    'post_type' => 'report',
);
$context['reports'] = new Timber\PostQuery($args);
$context['fields'] = get_fields();

Timber::render('templates/single-report/index.twig', $context);
