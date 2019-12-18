<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5dfaa0016462b',
        'title' => 'Images Gallery',
        'fields' => array(
            array(
                'key' => 'field_5dfaa006f0338',
                'label' => 'Images',
                'name' => 'images',
                'type' => 'gallery',
                'instructions' => 'Recommended dimensions are 1800 x 1012.',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'min' => 1,
                'max' => 5,
                'insert' => 'append',
                'library' => 'all',
                'min_width' => 1800,
                'min_height' => 1012,
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
        ),
    ));

endif;
