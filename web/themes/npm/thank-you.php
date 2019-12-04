<?php

/**
 * Template Name: Thank You
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/thank-you/index.twig', $context);
