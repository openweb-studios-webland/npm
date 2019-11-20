<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_wqf0w7ge7uybm',
        'title' => 'Services',
        'fields' => array(
            array(
                'key' => 'field_16tic1zlscb7k',
                'label' => 'Subheading',
                'name' => 'subheading',
                'type' => 'text',
                'instructions' => 'Defaults to "Service".',
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
                'key' => 'field_5fytmqpbmyjfk',
                'label' => 'Heading',
                'name' => 'heading',
                'type' => 'text',
                'instructions' => '',
                'required' => 1,
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
                'key' => 'field_mbjzcicojkwro',
                'label' => 'Text',
                'name' => 'text',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 1,
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
                'key' => 'field_co8osrmha65is',
                'label' => 'Button',
                'name' => 'button',
                'type' => 'clone',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'clone' => array(
                    0 => 'group_5d8b9a14327c5',
                ),
                'display' => 'seamless',
                'layout' => 'block',
                'prefix_label' => 1,
                'prefix_name' => 1,
            ),
            array(
                'key' => 'field_5dbef32775adf',
                'label' => 'Services',
                'name' => 'services',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 1,
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
                'button_label' => 'Add Service',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5dbef34775ae0',
                        'label' => 'Image',
                        'name' => 'image',
                        'type' => 'image',
                        'instructions' => 'Recommended dimensions are 450 x 450.',
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
                        'min_width' => 450,
                        'min_height' => 450,
                        'min_size' => '',
                        'max_width' => '',
                        'max_height' => '',
                        'max_size' => '',
                        'mime_types' => '',
                    ),
                    array(
                        'key' => 'field_5dqwf128cd2z1',
                        'label' => 'Heading',
                        'name' => 'heading',
                        'type' => 'text',
                        'instructions' => '',
                        'required' => 1,
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
						'key' => 'field_dk1zmnodwcqoa',
						'label' => 'Short Text',
						'name' => 'short_text',
						'type' => 'textarea',
						'instructions' => 'Recommended length is 150 characters.',
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
                        'key' => 'field_5dbef3fa75ae2',
                        'label' => 'Text',
                        'name' => 'text',
                        'type' => 'wysiwyg',
                        'instructions' => '',
                        'required' => 1,
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
                        'key' => 'field_5d943456cd20z',
                        'label' => 'Button',
                        'name' => 'button',
                        'type' => 'clone',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'clone' => array(
                            0 => 'group_5d8b9a14327c5',
                        ),
                        'display' => 'seamless',
                        'layout' => 'block',
                        'prefix_label' => 1,
                        'prefix_name' => 1,
                    ),
                    array(
                        'key' => 'field_5dbef41e75ae3',
                        'label' => 'Related Platforms',
                        'name' => 'platforms',
                        'type' => 'taxonomy',
                        'instructions' => '',
                        'required' => 1,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'taxonomy' => 'platform',
                        'field_type' => 'multi_select',
                        'allow_null' => 0,
                        'add_term' => 1,
                        'save_terms' => 0,
                        'load_terms' => 0,
                        'return_format' => 'id',
                        'multiple' => 0,
                    ),
                    array(
                        'key' => 'field_5dbef46975ae4',
                        'label' => 'Related Products',
                        'name' => 'products',
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
                            0 => 'product',
                        ),
                        'taxonomy' => '',
                        'allow_null' => 0,
                        'multiple' => 1,
                        'return_format' => 'object',
                        'ui' => 1,
                    ),
                    array(
                        'key' => 'field_5dbef48f75ae5',
                        'label' => 'Related Work',
                        'name' => 'work',
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
                            0 => 'work',
                        ),
                        'taxonomy' => '',
                        'allow_null' => 0,
                        'multiple' => 1,
                        'return_format' => 'object',
                        'ui' => 1,
                    ),
                ),
            ),
        ),
    ));

endif;
