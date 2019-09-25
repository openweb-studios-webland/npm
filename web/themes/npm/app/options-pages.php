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

endif;

// Add field values to Timber's context
function add_to_timber_context($context)
{
    $context['globals'] = get_fields('option');

    return $context;
}

add_filter('timber_context', 'add_to_timber_context');
