<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5db76af685f71',
        'title' => 'Locations',
        'fields' => array(
            array(
                'key' => 'field_5db76b063a30b',
                'label' => 'Image',
                'name' => 'image',
                'type' => 'image',
<<<<<<< HEAD
                'instructions' => 'Recommended dimensions are 900 x 1100.',
=======
                'instructions' => 'Recommended dimensions are 900 x 1100',
>>>>>>> Added about template, location block, and team block
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'array',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => 900,
                'min_height' => 1100,
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5db76b163a30c',
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
                'key' => 'field_5db76b2a3a30d',
                'label' => 'Locations',
                'name' => 'locations',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'collapsed' => '',
                'min' => 0,
                'max' => 0,
                'layout' => 'block',
                'button_label' => 'Add Location',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5db76b423a30e',
<<<<<<< HEAD
<<<<<<< HEAD
                        'label' => 'Text',
                        'name' => 'text',
=======
                        'label' => 'Location',
                        'name' => 'location',
>>>>>>> Added about template, location block, and team block
=======
                        'label' => 'Text',
                        'name' => 'text',
>>>>>>> Changed location field name
                        'type' => 'textarea',
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
                        'maxlength' => '',
                        'rows' => 4,
                        'new_lines' => 'br',
                    ),
                ),
            ),
        ),
    ));

endif;
