<?php

function create_post_type_labels($post_type_name = 'Posts', $post_type_singular_name = 'Post')
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

function register_post_types()
{
    register_post_type('call-to-action',
        array(
            'labels' => create_post_type_labels('Calls to Action', 'Call to Action'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('format',
        array(
            'labels' => create_post_type_labels('Formats', 'Format'),
            'public' => true,
            'publicly_queryable' => false,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('insight',
        array(
            'labels' => create_post_type_labels('Insights', 'Insight'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
            'taxonomies' => array('platform'),
        )
    );

    register_post_type('product',
        array(
            'labels' => create_post_type_labels('Products', 'Product'),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => '',
            'taxonomies' => array('platform'),
        )
    );

    register_post_type('program',
        array(
            'labels' => create_post_type_labels('Programs', 'Program'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
            'taxonomies' => array('topic'),
        )
    );

    register_post_type('sponsorship',
        array(
            'labels' => create_post_type_labels('Sponsorships', 'Sponsorship'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('testimonial',
        array(
            'labels' => create_post_type_labels('Testimonials', 'Testimonial'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('work',
        array(
            'labels' => create_post_type_labels('Work', 'Work'),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );
}

add_action('init', 'register_post_types');
