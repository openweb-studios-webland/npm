<?php

/**
 * Template Name: Get Started
 */

$context = Timber::get_context();
$context['post'] = Timber::get_post();
$context['fields'] = get_fields();

Timber::render('templates/get-started/index.twig', $context);
