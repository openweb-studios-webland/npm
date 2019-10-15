<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5da5f6122a712',
        'title' => 'Color',
        'fields' => array(
            array(
                'key' => 'field_5da5f612302b7',
                'label' => 'Color',
                'name' => 'color',
                'type' => 'select',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'choices' => array(
                    'white' => 'White',
                    'crimson' => 'Crimson',
                    'dark_blue' => 'Dark Blue',
                    'light_blue' => 'Light Blue',
                    'teal' => 'Teal',
                    'gradient' => 'Gradient',
                ),
                'default_value' => array(
                    0 => 'white',
                ),
                'allow_null' => 0,
                'multiple' => 0,
                'ui' => 0,
                'return_format' => 'value',
                'ajax' => 0,
                'placeholder' => '',
            ),
        ),
    ));

endif;
