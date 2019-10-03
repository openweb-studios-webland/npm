<?php

function register_post_types()
{
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
}

add_action('init', 'register_post_types');
