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
                'instructions' => 'Recommended dimensions are 675 x 1100.',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'array',
                'preview_size' => 'thumbnail',
                'library' => 'all',
                'min_width' => 675,
                'min_height' => 1100,
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
        ),
    ));

endif;
