<?php

function create_taxonomy_labels($taxonomy_name = 'Taxonomies', $taxonomy_singular_name = 'Taxonomy')
{
    $text_domain = get_stylesheet();
    $taxonomy_labels = array(
        'name' => _x($taxonomy_name, 'Taxonomy General Name', $text_domain),
        'singular_name' => _x($taxonomy_singular_name, 'Taxonomy Singular Name', $text_domain),
        'search_items' => __("Search {$taxonomy_name}", $text_domain),
        'all_items' => __("All {$taxonomy_name}", $text_domain),
        'parent_item' => __("Parent {$taxonomy_singular_name}", $text_domain),
        'parent_item_colon' => __("Parent {$taxonomy_singular_name}:", $text_domain),
        'edit_item' => __("Edit {$taxonomy_singular_name}", $text_domain),
        'update_item' => __("Update {$taxonomy_singular_name}", $text_domain),
        'add_new_item' => __("Add New {$taxonomy_singular_name}", $text_domain),
        'new_item_name' => __("New {$taxonomy_singular_name} Name", $text_domain),
        'menu_name' => __($taxonomy_name, $text_domain),
    );

    return $taxonomy_labels;
}

function register_taxonomies()
{
    register_taxonomy(
        'platform',
        array(
            'insight',
            'product',
        ),
        array(
            'labels' => create_taxonomy_labels('Platforms', 'Platform'),
            'hierarchical' => true,
            'public' => true,
            // 'publicly_queryable' => false,
            'show_admin_column' => true,
            'rewrite' => array('slug' => 'platforms'),
        )
    );

    register_taxonomy(
        'topic',
        'program',
        array(
            'labels' => create_taxonomy_labels('Topics', 'Topic'),
            'hierarchical' => true,
            'show_admin_column' => true,
        )
    );
}

add_action('init', 'register_taxonomies');
