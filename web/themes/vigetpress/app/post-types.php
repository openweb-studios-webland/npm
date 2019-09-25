<?php

function register_post_types()
{
    register_post_type('examples',
        array(
            'labels' => array(
                'name' => __('Examples'),
                'singular_name' => __('Example'),
            ),
            'public' => true,
            'has_archive' => false,
        )
    );
}

add_action('init', 'register_post_types');
