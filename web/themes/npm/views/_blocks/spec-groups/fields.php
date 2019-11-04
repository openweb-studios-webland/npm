<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_5da72b87cba39',
		'title' => 'Spec Groups',
		'fields' => array(
			array(
				'key' => 'field_5da72c691291f',
				'label' => 'Spec Groups',
				'name' => 'spec_groups',
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
				'max' => 7,
				'layout' => 'block',
				'button_label' => 'Add Spec Group',
				'sub_fields' => array(
					array(
						'key' => 'field_hp2vf50ih5dbl',
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
						'key' => 'field_5da72c7c12920',
						'label' => 'Specs',
						'name' => 'specs',
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
						'max' => 0,
						'layout' => 'block',
						'button_label' => 'Add Spec',
						'sub_fields' => array(
							array(
								'key' => 'field_5da72c9412921',
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
								'key' => 'field_5da72cb012923',
								'label' => 'Tooltip',
								'name' => 'tooltip',
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
								'new_lines' => '',
							),
							array(
								'key' => 'field_5da72caa12922',
								'label' => 'Text',
								'name' => 'text',
								'type' => 'textarea',
								'instructions' => 'New lines will automatically add &lt;br&gt; tags.',
								'required' => 1,
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
					array(
						'key' => 'field_5da72da712925',
						'label' => 'Samples',
						'name' => 'samples',
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
						'max' => 0,
						'layout' => 'block',
						'button_label' => 'Add Sample',
						'sub_fields' => array(
							array(
								'key' => 'field_5da72e2412928',
								'label' => 'Image',
								'name' => 'image',
								'type' => 'image',
								'instructions' => 'Recommended dimensions are 460 x 292',
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
								'min_width' => 460,
								'min_height' => 292,
								'min_size' => '',
								'max_width' => '',
								'max_height' => '',
								'max_size' => '',
								'mime_types' => '',
							),
							array(
								'key' => 'field_5da72df812926',
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
							array(
								'key' => 'field_5da72e1a12927',
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
						),
					),
				),
			),
			array(
				'key' => 'field_5da778e9c2ceb',
				'label' => 'Specs Download',
				'name' => 'specs_download',
				'type' => 'file',
				'instructions' => 'Allowed file type is PDF.',
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
				'mime_types' => 'pdf',
			),
			array(
				'key' => 'field_5da7790fc2cec',
				'label' => 'Guidelines Download',
				'name' => 'guidelines_download',
				'type' => 'file',
				'instructions' => 'Allowed file type is PDF.',
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
				'mime_types' => 'pdf',
			),
		),
    ));

endif;
