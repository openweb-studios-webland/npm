<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5be47c5fce2cf',
        'title' => 'Home',
        'fields' => array(
            array(
                'key' => 'field_5c06ef0486b77',
                'label' => 'Blocks',
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
                    acf_dynamic_clones_get_local_field_group('Cards', 'cards'),
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero-front-page'),
                    acf_dynamic_clones_get_local_field_group('Programs', 'programs'),
                    acf_dynamic_clones_get_local_field_group('Stats', 'stats'),
                    acf_dynamic_clones_get_local_field_group('Testimonials', 'testimonials-front-page'),
                    acf_dynamic_clones_get_local_field_group('Work', 'work'),
                ),
                'button_label' => 'Add Block',
                'min' => '',
                'max' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_type',
                    'operator' => '==',
                    'value' => 'front_page',
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
