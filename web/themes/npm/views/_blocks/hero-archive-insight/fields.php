<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

    acf_dynamic_clones_add_local_field_group(array(
        'key' => 'group_8qjgyxf0nmnwu',
        'title' => 'Hero Archive Insight',
        'fields' => array(
            array(
                'key' => 'field_5o9mkzwsa5tk0',
                'label' => 'Featured Insight or Report',
                'name' => 'featured_insight_report',
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
                    0 => 'insight',
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
