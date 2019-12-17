<?php

function get_image_target($url = '')
{
    // Return if URL is empty
    if (empty($url)) {
        return false;
    }

    // Parse URL
    $external_url = parse_url($url);
    $internal_url = parse_url(get_site_url());

    // Return if relative URL
    if (!array_key_exists('host', $external_url)) {
        return false;
    }

    // Remove www. from host
    $external_url = str_replace('www.', '', $external_url['host']);
    $internal_url = str_replace('www.', '', $internal_url['host']);

    return strcasecmp($external_url, $internal_url) !== 0 ? ' target="_blank"' : false;
}
