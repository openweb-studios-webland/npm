<?php

$context = Timber::get_context();
$post = new Timber\Post();
$context['post'] = $post;
$args = array(
    'taxonomy' => 'platform',
);
$platforms = $post->terms('platform');
$context['platforms'] = [];

foreach ($platforms as $platform) {
    if (!in_array($platform->name, $context['platforms'])) {
        array_push($context['platforms'], $platform);
    }
}

$context['fields'] = get_fields();

Timber::render('templates/single-product/index.twig', $context);
