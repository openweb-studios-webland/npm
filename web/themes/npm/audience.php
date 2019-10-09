<?php

/**
 * Template Name: Audience
 */

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/audience/index.twig', $context);
