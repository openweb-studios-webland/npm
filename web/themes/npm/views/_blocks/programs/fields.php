<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5d8cfe065b07z',
        'title' => 'Programs',
        'fields' => array(
            array(
                'key' => 'field_5d8d2f1afb62d',
                'label' => 'Heading',
                'name' => 'heading',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_5d8d2f20fb62e',
                'label' => 'Text',
                'name' => 'text',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'tabs' => 'all',
                'toolbar' => 'basic',
                'media_upload' => 0,
                'delay' => 0,
            ),
            array(
                'key' => 'field_5d8d2f35fb62f',
                'label' => 'Programs',
                'name' => 'programs',
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
                    0 => 'program',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 1,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
    ));

endif;
