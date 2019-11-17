<?php

// Return all oEmbed data (title, html, etc.)
function npm_get_oembed($url)
{
    require_once ABSPATH . WPINC . '/class-oembed.php';

    $oembed = _wp_oembed_get_object();
    $provider = $oembed->get_provider($url);

    if (!$provider) {
        return false;
    }

    return $oembed->fetch($provider, $url);
}
