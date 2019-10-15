<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5d9ce61wut65e',
        'title' => 'Index',
        'fields' => array(
            array(
                'key' => 'field_sn5p8bvl1b4p3',
                'label' => 'Featured Image',
                'name' => 'featured_image',
                'type' => 'image',
                'instructions' => 'Recommended dimensions are 1440 x 900',
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
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d9ce61abc844',
                'label' => 'Image',
                'name' => 'image',
                'type' => 'image',
                'instructions' => 'Recommended dimensions are 720 x 405',
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
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => '',
            ),
            array(
                'key' => 'field_5d9ce7a5bc847',
                'label' => 'Text',
                'name' => 'text',
                'type' => 'textarea',
                'instructions' => 'Recommended length is 120 characters',
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
                'new_lines' => '',
            ),
            array(
                'key' => 'field_5d9ce6a5bc846',
                'label' => 'Audio',
                'name' => 'audio',
                'type' => 'file',
                'instructions' => 'Allowed file types are MP3 and WAV',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'array',
                'library' => 'all',
                'min_size' => '',
                'max_size' => '',
                'mime_types' => 'mp3, wav',
            ),
            array(
                'key' => 'field_5d9ce652bc845',
                'label' => 'Video',
                'name' => 'video',
                'type' => 'oembed',
                'instructions' => 'Video embeds will supersede audio files',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'width' => '320',
                'height' => '195',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'work',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'the_content',
            1 => 'excerpt',
            2 => 'discussion',
            3 => 'comments',
            4 => 'featured_image',
            5 => 'slug',
            6 => 'author',
        ),
        'active' => true,
        'description' => '',
    ));

endif;
