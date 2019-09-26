<?php

function register_post_types()
{
    register_post_type('programs',
        array(
            'labels' => array(
                'name' => __('Programs'),
                'singular_name' => __('Program'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-screenoptions',
        )
    );
}

add_action('init', 'register_post_types');
