<?php

$field_group = array(
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
                'param' => 'taxonomy',
                'operator' => '==',
                'value' => 'post_format',
            ),
        ),
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'insight',
            ),
        ),
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'report',
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
);

if (function_exists('acf_add_local_field_group')):
    acf_add_local_field_group($field_group);
endif;

if (function_exists('acf_dynamic_clones_add_local_field_group')):
    acf_dynamic_clones_add_local_field_group($field_group);
endif;
