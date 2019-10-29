<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_9nfyqkg26b6ok',
        'title' => 'Alignment',
        'fields' => array(
            array(
                'key' => 'field_4fffbwqnlbex6',
                'label' => 'Select',
                'name' => 'select',
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
                    'left' => 'Left',
                    'right' => 'Right',
                ),
                'default_value' => array(
                    0 => 'left',
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
