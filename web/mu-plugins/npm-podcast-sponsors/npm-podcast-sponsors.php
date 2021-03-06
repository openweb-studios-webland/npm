<?php

/**
 * Plugin Name: Podcast Sponsors
 * Plugin URI: https://nationalpublicmedia.com
 * Description: Retrieve podcast sponsors from Google Sheets.
 * Version: 1.0
 * Author: NPM Creative & Justin Vandenberg
 * Author URI: https://nationalpublicmedia.com
 */

// Create post type labels
function npm_podcast_sponsors_create_post_type_labels($post_type_name = 'Posts', $post_type_singular_name = 'Post')
{
    $text_domain = 'npm-podcast-sponsors';
    $post_type_labels = array(
        'name' => _x($post_type_name, 'Post Type General Name', $text_domain),
        'singular_name' => _x($post_type_singular_name, 'Post Type Singular Name', $text_domain),
        'search_items' => __("Search {$post_type_name}", $text_domain),
        'all_items' => __("All {$post_type_name}", $text_domain),
        'parent_item' => __("Parent {$post_type_singular_name}", $text_domain),
        'parent_item_colon' => __("Parent {$post_type_singular_name}:", $text_domain),
        'edit_item' => __("Edit {$post_type_singular_name}", $text_domain),
        'update_item' => __("Update {$post_type_singular_name}", $text_domain),
        'add_new_item' => __("Add New {$post_type_singular_name}", $text_domain),
        'new_item_name' => __("New {$post_type_singular_name} Name", $text_domain),
        'menu_name' => __($post_type_name, $text_domain),
    );
    return $post_type_labels;
}

// Register Podcast Sponsor post type
function npm_podcast_sponsors_register_post_types()
{
    register_post_type('podcast',
        array(
            'labels' => npm_podcast_sponsors_create_post_type_labels('Podcasts', 'Podcast'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-format-audio',
			'public' => true,
			'rewrite' => array('slug' => 'podcastsponsors'),
        )
    );
}
add_action('init', 'npm_podcast_sponsors_register_post_types');

/**
 * Register function
 * @return array
 */
function npm_podcast_sponsors()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-npm-podcast-sponsors.php';

	$npmPodcastSponsors = new NpmPodcastSponsors();

    return $npmPodcastSponsors->getData();
}
