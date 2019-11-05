<?php

function npm_create_post_type_labels($post_type_name = 'Posts', $post_type_singular_name = 'Post')
{
    $text_domain = get_stylesheet();
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

function npm_register_post_types()
{
    register_post_type('article',
        array(
            'labels' => npm_create_post_type_labels('Articles', 'Article'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-welcome-write-blog',
            'public' => true,
            'rewrite' => array('slug' => 'insights/articles'),
            'taxonomies' => array('platform'),
        )
    );

    register_post_type('call-to-action',
        array(
            'labels' => npm_create_post_type_labels('Calls to Action', 'Call to Action'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-admin-post',
            'public' => false,
            'show_ui' => true,
        )
    );

    register_post_type('product',
        array(
            'labels' => npm_create_post_type_labels('Products', 'Product'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-products',
            'public' => true,
            'rewrite' => array('slug' => 'products'),
            'taxonomies' => array('platform'),
        )
    );

    register_post_type('program',
        array(
            'labels' => npm_create_post_type_labels('Programs', 'Program'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-screenoptions',
            'public' => false,
            'show_ui' => true,
            'taxonomies' => array('topic', 'category'),
        )
    );

    register_post_type('report',
        array(
            'labels' => npm_create_post_type_labels('Reports', 'Report'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-chart-pie',
            'public' => true,
            'rewrite' => array('slug' => 'insights/reports'),
        )
    );

    register_post_type('sponsorship',
        array(
            'labels' => npm_create_post_type_labels('Sponsorships', 'Sponsorship'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-groups',
            'public' => true,
        )
    );

    register_post_type('testimonial',
        array(
            'labels' => npm_create_post_type_labels('Testimonials', 'Testimonial'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-editor-quote',
            'public' => false,
            'show_ui' => true,
        )
    );

    register_post_type('work',
        array(
            'labels' => npm_create_post_type_labels('Work', 'Work'),
            'has_archive' => false,
            'menu_icon' => 'dashicons-admin-media',
            'public' => true,
        )
    );
}

add_action('init', 'npm_register_post_types');
