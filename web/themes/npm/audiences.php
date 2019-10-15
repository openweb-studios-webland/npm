<?php

/**
 * Template Name: Audiences
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/audiences/index.twig', $context);
