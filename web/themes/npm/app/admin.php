<?php

/**
 * Remove unwanted menus from the admin
 * https://codex.wordpress.org/Function_Reference/remove_menu_page
 */
function admin_remove_menus()
{
    if (!current_user_can('manage_options')) {
        // remove_menu_page('upload.php'); // Media
        remove_menu_page('options-general.php'); // Settings
        remove_menu_page('plugins.php'); // Plugins
        remove_menu_page('tools.php'); // Tools
        remove_menu_page('themes.php'); // Appearance
        add_filter('acf/settings/show_admin', '__return_false'); // Custom fields
    }

    // remove_menu_page('edit.php'); // Posts
    // remove_menu_page('edit.php?post_type=page'); // Pages
    // remove_menu_page('users.php'); // Users
    remove_menu_page('edit-comments.php'); // Comments
}

add_action('admin_menu', 'admin_remove_menus');

// Disable Gutenberg for posts
add_filter('use_block_editor_for_post', '__return_false', 10);

// Disable Gutenberg for post types
add_filter('use_block_editor_for_post_type', '__return_false', 10);
