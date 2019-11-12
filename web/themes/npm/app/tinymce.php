<?php

// Add call to action shortcode
function npm_user_options()
{
    // Check if user can edit posts/pages and has the visual editor enabled
    if (!current_user_can('edit_posts')
        && !current_user_can('edit_pages')
        && get_user_option('rich_editing') !== true) {
        return;
    }

    add_filter('mce_external_plugins', 'npm_add_buttons');
}

add_action('init', 'npm_user_options');

function npm_add_buttons($plugins)
{
    $plugins['npm_call_to_action'] = get_stylesheet_directory_uri() . '/assets/scripts/admin/tinymce.js';

    return $plugins;
}

function npm_call_to_action_shortcode($params)
{
    $text = $params['text'];
    $button_text = $params['button_text'];
    $button_link = $params['button_link'];

    return
        '<div class="cta">
			<p class="cta-heading">' . $text . '</p>
			<a class="cta-button" href="' . $button_link . '">' . $button_text . '</a>
		</div>';
}

add_shortcode('npm_call_to_action', 'npm_call_to_action_shortcode');

// Strips formatting options out of all wysiwygs
function npm_toolbars_formats($settings)
{
    $block_formats = array(
        'Paragraph=p',
        'Heading 1=h1',
        'Heading 2=h2',
        'Heading 3=h3',
        'Heading 4=h4',
        'Heading 5=h5',
        'Heading 6=h6',
    );
    $settings['block_formats'] = implode(';', $block_formats);

    $style_formats = array(
        array(
            'title' => 'Small',
            'selector' => 'p',
            'styles' => array(
                'color' => '#707070',
                'font-size' => '11px',
            ),
        ),
    );
    $settings['style_formats'] = json_encode($style_formats);

    return $settings;
}

add_filter('tiny_mce_before_init', 'npm_toolbars_formats');

// Customizes available buttons
function npm_toolbars($toolbars)
{
    // Edit the "Full" toolbar
    $toolbars['Full'] = array(
        '1' => array(
            'styleselect',
            'formatselect',
            'bold',
            'italic',
            'link',
            'bullist',
            'numlist',
            'blockquote',
            'hr',
            'pastetext',
            'removeformat',
            'undo',
            'redo',
            'wp_help',
            'fullscreen',
            'npm_call_to_action',
        ),
    );

    // Edit the "Basic" toolbar
    $toolbars['Basic'] = array(
        '1' => array(
            'formatselect',
            'bold',
            'italic',
            'link',
            'pastetext',
            'removeformat',
            'undo',
            'redo',
            'wp_help',
            'fullscreen',
        ),
    );

    return $toolbars;
}
add_filter('acf/fields/wysiwyg/toolbars', 'npm_toolbars');
