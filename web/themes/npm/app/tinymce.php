<?php

function npm_user_options()
{
    // Check if user can edit posts/pages and has the visual editor enabled
    if (!current_user_can('edit_posts')
        && !current_user_can('edit_pages')
        && get_user_option('rich_editing') !== true) {
        return;
    }

    add_filter('mce_external_plugins', 'npm_add_buttons');
    add_filter('mce_buttons', 'npm_register_buttons');
}

add_action('init', 'npm_user_options');

function npm_add_buttons($plugins)
{
    $plugins['npm_call_to_action'] = get_stylesheet_directory_uri() . '/assets/scripts/admin/tinymce.js';

    return $plugins;
}

function npm_register_buttons($buttons)
{
    array_push($buttons, 'npm_call_to_action');

    return $buttons;
}

// When shortcode is called
function npm_call_to_action_shortcode($params)
{
    $text = $params['text'];
    $button_text = $params['button_text'];
    $button_link = $params['button_link'];

    return
        '<div class="border border-gray-border float-right mb-30 ml-30 p-30 text-center w-full lg:w-1/2">
			<p class="heading-7">' . $text . '</p>
			<a class="button-outline-crimson min-w-0 w-full" href="' . $button_link . '">' . $button_text . '</a>
		</div>';
}

add_shortcode('npm_call_to_action', 'npm_call_to_action_shortcode');
