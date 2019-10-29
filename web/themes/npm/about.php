<?php

/**
 * Template Name: About
 */

$context = Timber::get_context();
$context['fields'] = get_fields();

Timber::render('templates/about/index.twig', $context);
