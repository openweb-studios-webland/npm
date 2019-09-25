<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render(array(
    $context['post']->post_name . '/index.twig',
    'page.twig',
), $context);
