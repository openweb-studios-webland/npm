<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['fields'] = get_fields();

Timber::render('templates/single.twig', $context);

/*
 * Categories ex:
 * $context['categories'] = Timber::get_terms('category',
 *   array(
 *    'hide_empty' => true,
 *    'number' => 2,
 *   )
 * );
 *
 * Sidebar ex:
 * $context['sidebar']['posts'] = new Timber\PostQuery(
 *   array(
 *     'posts_per_page' => 3,
 *     'post__not_in' => array(1),
 *   )
 * );
 * $context['sidebar']['categories'] = Timber::get_terms('category',
 *   array(
 *     'hide_empty' => true,
 *     'number' => 5,
 *   )
 * );
 *
 * $context['sidebar'] = Timber::get_sidebar('_partials/sidebar.twig', $context);
 */
