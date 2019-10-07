<?php

function create_taxonomy_labels($taxonomy_name, $taxonomy_singular_name)
{
    $taxonomy_labels = array(
        'name' => _x($taxonomy_name, 'taxonomy general name', 'textdomain'),
        'singular_name' => _x($taxonomy_singular_name, 'taxonomy singular name', 'textdomain'),
        'search_items' => __("Search {$taxonomy_name}", 'textdomain'),
        'all_items' => __("All {$taxonomy_name}", 'textdomain'),
        'parent_item' => __("Parent {$taxonomy_singular_name}", 'textdomain'),
        'parent_item_colon' => __("Parent {$taxonomy_singular_name}:", 'textdomain'),
        'edit_item' => __("Edit {$taxonomy_singular_name}", 'textdomain'),
        'update_item' => __("Update {$taxonomy_singular_name}", 'textdomain'),
        'add_new_item' => __("Add New {$taxonomy_singular_name}", 'textdomain'),
        'new_item_name' => __("New {$taxonomy_singular_name} Name", 'textdomain'),
        'menu_name' => __($taxonomy_name, 'textdomain'),
    );

    return $taxonomy_labels;
}

function register_taxonomies()
{
    register_taxonomy(
        'platform',
        'format',
        array(
            'labels' => create_taxonomy_labels('Platforms', 'Platform'),
            'hierarchical' => true,
            'show_admin_column' => true,
        )
    );

    register_taxonomy(
        'topic',
        'program',
        array(
            'labels' => create_taxonomy_labels('Platforms', 'Platform'),
            'hierarchical' => true,
            'show_admin_column' => true,
        )
    );
}

add_action('init', 'register_taxonomies');
