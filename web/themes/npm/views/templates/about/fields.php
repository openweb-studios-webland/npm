<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_inpkw4yz1nduw',
        'title' => 'About',
        'fields' => array(
            array(
                'key' => 'field_rcfe1c396v2tn',
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
                    acf_dynamic_clones_get_local_field_group('Hero', 'hero-about'),
                    acf_dynamic_clones_get_local_field_group('Insights', 'insights'),
                    acf_dynamic_clones_get_local_field_group('Locations', 'locations'),
                    acf_dynamic_clones_get_local_field_group('Team', 'team-members'),
                ),
                'button_label' => 'Add Block',
                'min' => '',
                'max' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'page_template',
                    'operator' => '==',
                    'value' => 'about.php',
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
