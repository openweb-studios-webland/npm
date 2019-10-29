<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5db8772c85cd4',
        'title' => 'Videos',
        'fields' => array(
            array(
                'key' => 'field_5db8773121f40',
                'label' => 'Videos',
                'name' => 'videos',
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
                'button_label' => 'Add Video',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5zq3b89871a731',
                        'label' => 'Image',
                        'name' => 'image',
                        'type' => 'image',
                        'instructions' => 'Recommended dimensions are 720 x 540.',
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
                        'min_width' => 720,
                        'min_height' => 540,
                        'min_size' => '',
                        'max_width' => '',
                        'max_height' => '',
                        'max_size' => '',
                        'mime_types' => '',
                    ),
                    array(
                        'key' => 'field_5db8774621f41',
                        'label' => 'Video',
                        'name' => 'video',
                        'type' => 'oembed',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'width' => '',
                        'height' => '',
                    ),
                ),
            ),
        ),
    ));

endif;
