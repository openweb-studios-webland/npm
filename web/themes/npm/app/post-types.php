<?php

function register_post_types()
{
    register_post_type('call-to-action',
        array(
            'labels' => array(
                'name' => __('Calls to Action'),
                'singular_name' => __('Call to Action'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('format',
        array(
            'labels' => array(
                'name' => __('Formats'),
                'singular_name' => __('Format'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );

    register_post_type('program',
        array(
            'labels' => array(
                'name' => __('Programs'),
                'singular_name' => __('Program'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
            'taxonomies' => array('topic'),
        )
    );

    register_post_type('testimonial',
        array(
            'labels' => array(
                'name' => __('Testimonials'),
                'singular_name' => __('Testimonial'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => '',
        )
    );
}

add_action('init', 'register_post_types');
