<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5d9786e2cea87',
        'title' => 'Menu Item',
        'fields' => array(
            array(
                'key' => 'field_5d9786e856175',
                'label' => '',
                'name' => 'image',
                'type' => 'image',
                'instructions' => 'Allowed file type is SVG. All fill attributes should be removed.',
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
                'mime_types' => 'svg',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'nav_menu_item',
                    'operator' => '==',
                    'value' => '2', // Staging
                ),
            ),
            array(
                array(
                    'param' => 'nav_menu_item',
                    'operator' => '==',
                    'value' => '11', // Local
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

endif;

// Add fields to menu objects
function add_to_nav_menu_objects($items, $args)
{
    foreach ($items as &$item) {
        $fields = get_fields($item) ? array_keys(get_fields($item)) : [];

        foreach ($fields as $field) {
            $field_value = get_field($field, $item);

            if ($field_value) {
                $item->$field = $field_value;
            }
        }
    }

    return $items;
}

add_filter('wp_nav_menu_objects', 'add_to_nav_menu_objects', 10, 2);
