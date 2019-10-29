<?php

/**
 * Template Name: Services (Single)
 */

$context = Timber::get_context();
$context['fields'] = get_fields();

Timber::render('templates/single-service/index.twig', $context);
