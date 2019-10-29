<?php

/**
 * Template Name: About
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/about/index.twig', $context);
