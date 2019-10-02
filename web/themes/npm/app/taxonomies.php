<?php

function register_taxonomies()
{
    register_taxonomy(
        'topics',
        array('program'),
        array(
            'hierarchical' => true,
            'labels' => array(
                'name' => __('Topics'),
                'singular_name' => __('Topic'),
            ),
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'topic'),
        )
    );
}

add_action('init', 'register_taxonomies');
