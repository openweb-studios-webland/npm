<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5d967127adc7c',
        'title' => 'Call to Action',
        'fields' => array(
            array(
                'key' => 'field_5d96712f1260c',
                'label' => 'Call to Action',
                'name' => 'call_to_action',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'call-to-action',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ),
            ),
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                ),
            ),
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'article',
                ),
            ),
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'report',
                ),
            ),
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'sponsorship',
                ),
            ),
        ),
        'menu_order' => 10,
        'position' => 'acf_after_title',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

    acf_add_local_field_group(array(
        'key' => 'group_lcnqqyofwu97l',
        'title' => 'Call to Action',
        'fields' => array(
            array(
                'key' => 'field_selo07t0h362t',
                'label' => 'Call to Action',
                'name' => 'call_to_action',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'call-to-action',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'taxonomy',
                    'operator' => '==',
                    'value' => 'platform',
                ),
            ),
        ),
        'menu_order' => 10,
        'position' => 'acf_after_title',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

endif;

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_28yah4s4m5e0b',
        'title' => 'Call to Action',
        'fields' => array(
            array(
                'key' => 'field_n7rleyp4f7sbt',
                'label' => 'Call to Action',
                'name' => 'call_to_action',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'call-to-action',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
    ));

endif;
