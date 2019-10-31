<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5r0cef19bfa55',
        'title' => 'Work Groups',
        'fields' => array(
            array(
				'key' => 'field_5db363411c008',
				'label' => 'Work Groups',
				'name' => 'work_groups',
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
				'button_label' => 'Add Work Group',
				'sub_fields' => array(
					array(
						'key' => 'field_5db363b79b2a8',
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
						'key' => 'field_5db360d919c02',
						'label' => 'Work',
						'name' => 'work',
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
						'button_label' => 'Add Work',
						'sub_fields' => array(
							array(
								'key' => 'field_5db3610e19c03',
								'label' => 'Type',
								'name' => 'type',
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
									'image' => 'Image',
									'audio' => 'Audio',
									'video' => 'Video',
								),
								'default_value' => array(
									0 => 'image',
								),
								'allow_null' => 0,
								'multiple' => 0,
								'ui' => 0,
								'return_format' => 'value',
								'ajax' => 0,
								'placeholder' => '',
							),
							array(
								'key' => 'field_5db3613219c04',
								'label' => 'Image',
								'name' => 'image',
								'type' => 'image',
								'instructions' => 'Recommended dimensions are 720 x 405',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'image',
										),
									),
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'video',
										),
									),
								),
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'return_format' => 'array',
								'preview_size' => 'thumbnail',
								'library' => 'all',
								'min_width' => 720,
								'min_height' => 405,
								'min_size' => '',
								'max_width' => '',
								'max_height' => '',
								'max_size' => '',
								'mime_types' => '',
							),
							array(
								'key' => 'field_5db3615819c05',
								'label' => 'Images',
								'name' => 'images',
								'type' => 'gallery',
								'instructions' => 'Recommended dimensions are 1920 x 810',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'image',
										),
									),
								),
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'min' => '',
								'max' => '',
								'insert' => 'append',
								'library' => 'all',
								'min_width' => 1920,
								'min_height' => 810,
								'min_size' => '',
								'max_width' => '',
								'max_height' => '',
								'max_size' => '',
								'mime_types' => '',
							),
							array(
								'key' => 'field_5db361b819c06',
								'label' => 'Audio',
								'name' => 'audio',
								'type' => 'file',
								'instructions' => 'Allowed file types are MP3 and WAV',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'audio',
										),
									),
								),
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
								'key' => 'field_5dbb58d2667ca',
								'label' => 'Program',
								'name' => 'program',
								'type' => 'post_object',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'audio',
										),
									),
								),
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
								'multiple' => 0,
								'return_format' => 'object',
								'ui' => 1,
							),
							array(
								'key' => 'field_5db3622419c08',
								'label' => 'Video',
								'name' => 'video',
								'type' => 'oembed',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_5db3610e19c03',
											'operator' => '==',
											'value' => 'video',
										),
									),
								),
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'width' => '',
								'height' => '',
							),
							array(
								'key' => 'field_5db3625119c09',
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
						),
					),
				),
			),
		),
    ));

endif;
