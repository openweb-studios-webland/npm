<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5da4da09c1b3c',
		'title' => 'Featured Content Taxonomy Platform',
		'fields' => array(
			array(
				'key' => 'field_5da4da0d130c5',
				'label' => 'Featured Content',
				'name' => 'featured_content',
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
				'min' => 1,
				'max' => 3,
				'layout' => 'block',
				'button_label' => 'Add Featured Content',
				'sub_fields' => array(
					array(
						'key' => 'field_5da4da28130c6',
						'label' => 'Image',
						'name' => 'image',
						'type' => 'image',
						'instructions' => 'Recommended dimensions are 1080 x 607.',
						'required' => 1,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'return_format' => '',
						'preview_size' => 'thumbnail',
						'library' => '',
						'min_width' => 1080,
						'min_height' => 607,
						'min_size' => '',
						'max_width' => '',
						'max_height' => '',
						'max_size' => '',
						'mime_types' => '',
					),
					array(
						'key' => 'field_5da4da31130c7',
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
						'key' => 'field_5da4da38130c8',
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
						'key' => 'field_5da4da4a130c9',
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
						'layout' => '',
						'prefix_label' => 1,
						'prefix_name' => 1,
					),
				),
			),
			array(
				'key' => 'field_5da4da70130ca',
				'label' => 'Secondary Featured Content',
				'name' => 'secondary_featured_content',
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
				'max' => 5,
				'layout' => 'block',
				'button_label' => 'Add Featured Content',
				'sub_fields' => array(
					array(
						'key' => 'field_5da4da70130cb',
						'label' => 'Image',
						'name' => 'image',
						'type' => 'image',
						'instructions' => 'Recommended dimensions are 660 x 371.',
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
						'min_width' => 660,
						'min_height' => 371,
						'min_size' => '',
						'max_width' => '',
						'max_height' => '',
						'max_size' => '',
						'mime_types' => '',
					),
					array(
						'key' => 'field_5da4da70130cc',
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
						'key' => 'field_5da4da70130cd',
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
						'key' => 'field_5da4da70130ce',
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
				),
			),
			array(
                'key' => 'field_lxmwx00kae4k0',
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
		),
    ));

endif;
