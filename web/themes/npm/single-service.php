<?php

/**
 * Template Name: Services (Single)
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/single-service/index.twig', $context);
