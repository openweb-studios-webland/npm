<?php

$context = Timber::get_context();
$context['fields'] = get_fields();

Timber::render(array(
    $context['post']->post_name . '/index.twig',
    'page.twig',
), $context);
