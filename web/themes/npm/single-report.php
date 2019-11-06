<?php

$context = Timber::get_context();
$context['post'] = Timber::get_post();
$context['fields'] = get_fields();

Timber::render('templates/single-report/index.twig', $context);
