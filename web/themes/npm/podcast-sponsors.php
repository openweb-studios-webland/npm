<?php

/**
 * Template Name: Podcast Sponsors
 */

$context = Timber::get_context();
$args = array(
    'posts_per_page' => -1,
    'post_type' => 'podcast-sponsor',
);
$context['podcast_sponsors'] = new Timber\PostQuery($args);
$context['promo_codes'] = npm_podcast_sponsors();

Timber::render('templates/podcast-sponsors.twig', $context);
