<?php

$context = Timber::get_context();
$context['fields'] = get_fields();
$context['front_page'] = true;

Timber::render('templates/front-page/index.twig', $context);
