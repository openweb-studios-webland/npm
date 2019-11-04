<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_fdaem6p0m3f7d',
        'title' => 'Page',
        'fields' => array(
            array(
                'key' => 'field_cbq2onj966lju',
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
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero'),
                    acf_dynamic_clones_get_local_field_group('Images', 'images'),
                    acf_dynamic_clones_get_local_field_group('Related Insights', 'insights'),
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
                    'param' => 'post_template',
                    'operator' => '==',
                    'value' => 'default',
                ),
                array(
                    'param' => 'page_type',
                    'operator' => '!=',
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
