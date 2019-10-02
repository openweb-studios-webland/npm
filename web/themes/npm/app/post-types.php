<?php

function register_post_types()
{
    register_post_type('platform',
        array(
            'labels' => array(
                'name' => __('Platforms'),
                'singular_name' => __('Platform'),
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
            'taxonomies' => array('topics'),
        )
    );
}

add_action('init', 'register_post_types');
