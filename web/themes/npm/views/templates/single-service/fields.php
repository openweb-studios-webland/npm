<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_eky8w5zk45384',
        'title' => 'Service Single',
        'fields' => array(
            array(
                'key' => 'field_xkr6l8m1ay374',
                'label' => 'Page Blocks',
                'name' => 'blocks',
                'type' => 'flexible_content',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'layouts' => array(
                    acf_dynamic_clones_get_local_field_group('Featured Content', 'featured-content'),
                    acf_dynamic_clones_get_local_field_group('Featured Work', 'featured-work'),
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero-single-service'),
                    acf_dynamic_clones_get_local_field_group('Images', 'images'),
                    acf_dynamic_clones_get_local_field_group('Related Articles', 'articles'),
                    acf_dynamic_clones_get_local_field_group('Related Products', 'products'),
                    acf_dynamic_clones_get_local_field_group('Related Services', 'services'),
                    acf_dynamic_clones_get_local_field_group('Related Work', 'work'),
                    acf_dynamic_clones_get_local_field_group('Stats', 'stats'),
                    acf_dynamic_clones_get_local_field_group('Text', 'text'),
                    acf_dynamic_clones_get_local_field_group('Videos', 'videos'),
                ),
                'button_label' => 'Add Block',
                'min' => '',
                'max' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'single-service.php',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'acf_after_title',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'the_content',
            1 => 'excerpt',
            2 => 'discussion',
            3 => 'comments',
            4 => 'featured_image',
            5 => 'slug',
            6 => 'author',
        ),
        'active' => 1,
        'description' => '',
    ));

endif;
