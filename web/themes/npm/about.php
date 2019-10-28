<?php

/**
 * Template Name: About
 */

$context = Timber::get_context();
<<<<<<< HEAD
=======
$context['post'] = new Timber\Post();
>>>>>>> Added about template, location block, and team block
$context['fields'] = get_fields();

Timber::render('templates/about/index.twig', $context);
