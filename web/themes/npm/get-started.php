<?php

/**
 * Template Name: Get Started
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/get-started/index.twig', $context);
