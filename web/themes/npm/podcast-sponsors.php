<?php

/**
 * Template Name: Podcast Sponsors
 */

$context = Timber::get_context();
$context['podcast_sponsors'] = npm_podcast_sponsors();

Timber::render('templates/podcast-sponsors.twig', $context);
