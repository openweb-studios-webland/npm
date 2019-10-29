<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_rmlgkiuo93h4w',
        'title' => 'Sponsoship',
        'fields' => array(
            array(
                'key' => 'field_4s62gwu9qdg30',
                'label' => 'Blocks',
                'name' => 'blocks',
                'type' => 'flexible_content',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'layouts' => array(
                    acf_dynamic_clones_get_local_field_group('Call to Action', 'call-to-action'),
                    acf_dynamic_clones_get_local_field_group('Featured Content', 'featured-content'),
                    acf_dynamic_clones_get_local_field_group('Featured Work', 'featured-work'),
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero'),
                    acf_dynamic_clones_get_local_field_group('Programs', 'programs'),
                    acf_dynamic_clones_get_local_field_group('Stats', 'stats'),
                    acf_dynamic_clones_get_local_field_group('Testimonials', 'testimonials'),
                    acf_dynamic_clones_get_local_field_group('Work', 'work'),
                ),
                'button_label' => 'Add Block',
                'min' => '',
                'max' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'sponsorship',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'acf_after_title',
        'style' => 'seamless',
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
        'active' => 1,
        'description' => '',
    ));

endif;
