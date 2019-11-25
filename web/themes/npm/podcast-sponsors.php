<?php

/**
 * Template Name: Podcast Sponsors
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['query_vars'] = array(
    'podcasts' => $context['post']->post_name,
    'hasOffer' => get_query_var('has-offer'),
    'keywords' => get_query_var('keywords'),
);
$args = array(
    'posts_per_page' => -1,
	'post_type' => 'podcast',
	'order' => 'ASC',
	'orderby' => 'title',
);
$context['podcasts'] = new Timber\PostQuery($args);
$context['promo_codes'] = npm_podcast_sponsors();

Timber::render('templates/podcast-sponsors/index.twig', $context);
