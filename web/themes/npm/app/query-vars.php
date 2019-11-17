<?php

function npm_register_query_vars($vars)
{
    // Platforms
    $vars[] .= 'platforms';

    // Podcast sponsors
    $vars[] .= 'podcasts';
    $vars[] .= 'has-offer';
    $vars[] .= 'keywords';

    return $vars;
}
add_filter('query_vars', 'npm_register_query_vars');
