<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5db87c7dd47c2',
        'title' => 'Images',
        'fields' => array(
            array(
                'key' => 'field_5db87c8188886',
                'label' => 'Images',
                'name' => 'images',
                'type' => 'gallery',
                'instructions' => 'Recommended dimensions are 1440 x 960.',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'min' => '',
                'max' => '',
                'insert' => 'append',
                'library' => 'all',
                'min_width' => 1440,
                'min_height' => 960,
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
        ),
    ));

endif;
