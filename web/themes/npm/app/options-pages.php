<?php

// Add options page
if (function_exists('acf_add_options_page')):

    acf_add_options_page(array(
        'page_title' => 'Globals',
        'menu_title' => 'Globals',
        'menu_slug' => 'globals',
    ));

endif;

// Add fields to options page
if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_5db9d60a95e34',
        'title' => 'Locations',
        'fields' => array(
            array(
                'key' => 'field_5db9d60e1634c',
                'label' => 'Locations',
                'name' => 'locations',
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
                'button_label' => 'Add Location',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5db9d6741634d',
                        'label' => 'Text',
                        'name' => 'text',
                        'type' => 'textarea',
                        'instructions' => 'New lines will automatically add &lt;br&gt; tags.',
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
                        'new_lines' => 'br',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'globals',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'acf_after_title',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));

endif;

// Add field values to Timber's context
function npm_add_to_timber_context($context)
{
    $context['globals'] = get_fields('option');

    return $context;
}

add_filter('timber_context', 'npm_add_to_timber_context');
