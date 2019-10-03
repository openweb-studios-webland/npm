<?php

function register_taxonomies()
{
    register_taxonomy(
        'platform',
        'format',
        array(
            'labels' => array(
                'name' => __('Platforms'),
                'singular_name' => __('Platform'),
            ),
            'show_admin_column' => true,
        )
    );

    register_taxonomy(
        'topic',
        'program',
        array(
            'labels' => array(
                'name' => __('Topics'),
                'singular_name' => __('Topic'),
            ),
            'show_admin_column' => true,
        )
    );
}

add_action('init', 'register_taxonomies');
