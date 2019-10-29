<?php

$context = Timber::get_context();
$context['fields'] = get_fields();

Timber::render('templates/index.twig', $context);
