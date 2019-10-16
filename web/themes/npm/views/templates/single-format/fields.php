<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5be47c5fce274',
        'title' => 'Platform',
        'fields' => array(
            array(
                'key' => 'field_5c06ef04zpb77',
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
                    acf_dynamic_clones_get_local_field_group('Cards', 'cards-format'),
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero'),
                    acf_dynamic_clones_get_local_field_group('Insights', 'insights'),
                    acf_dynamic_clones_get_local_field_group('Stats', 'stats'),
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
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'format',
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
