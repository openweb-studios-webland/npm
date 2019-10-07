<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();
$context['front_page'] = true;

Timber::render('templates/front-page/index.twig', $context);
