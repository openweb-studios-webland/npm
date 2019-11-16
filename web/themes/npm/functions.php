<?php

require_once get_template_directory() . '/app/timber.php';
require_once get_template_directory() . '/app/admin.php';
require_once get_template_directory() . '/app/tinymce.php';
require_once get_template_directory() . '/app/posts-per-page.php';
require_once get_template_directory() . '/app/query-vars.php';
require_once get_template_directory() . '/app/post-types.php';
require_once get_template_directory() . '/app/taxonomies.php';
require_once get_template_directory() . '/app/parent-terms.php';
require_once get_template_directory() . '/app/image-sizes.php';
require_once get_template_directory() . '/app/options-pages.php';
require_once get_template_directory() . '/app/menus.php';
require_once get_template_directory() . '/app/menu-items.php';

function npm_get_oembed_details($url)
{
    require_once ABSPATH . WPINC . '/class-oembed.php';

    $oembed = _wp_oembed_get_object();
    $provider = $oembed->get_provider($url);

    if (!$provider) {
        return false;
    }

    return $oembed->fetch($provider, $url);
}

function custom_query_vars_filter($vars)
{
    $vars[] .= 'podcasts';
    $vars[] .= 'has-offer';
    $vars[] .= 'keywords';
    return $vars;
}
add_filter('query_vars', 'custom_query_vars_filter');
