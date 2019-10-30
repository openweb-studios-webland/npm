<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_z95076jgklccr',
        'title' => 'Text with Call to Action',
        'fields' => array(
            array(
                'key' => 'field_5db871zfa24e1',
                'label' => 'Alignment',
                'name' => 'alignment',
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
                    0 => 'group_9nfyqkg26b6ok',
                ),
                'display' => 'seamless',
                'layout' => 'block',
                'prefix_label' => 1,
                'prefix_name' => 1,
            ),
            array(
                'key' => 'field_axjjjbbdj07dr',
                'label' => 'Call to Action',
                'name' => 'call_to_action',
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
                    0 => 'call-to-action',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
            array(
                'key' => 'field_gzjqq5gt5dsmo',
                'label' => 'Text',
                'name' => 'text',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 0,
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
        ),
    ));

endif;
