<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5d9ba11e476d6',
        'title' => 'Color',
        'fields' => array(
            array(
                'key' => 'field_5d9ba123d82ec',
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
                    'blue' => 'Dark Blue',
                    'blue-light' => 'Light Blue',
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
