<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_8qjgyxf0nmnwu',
        'title' => 'Hero Insights',
        'fields' => array(
            array(
                'key' => 'field_5o9mkzwsa5tk0',
                'label' => 'Featured Article or Report',
                'name' => 'featured_article_report',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'article',
                    1 => 'report',
                ),
                'taxonomy' => '',
                'allow_null' => 0,
                'multiple' => 0,
                'return_format' => 'object',
                'ui' => 1,
            ),
        ),
    ));

endif;
