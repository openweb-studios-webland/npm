<?php

function register_query_vars($vars)
{
    $vars[] .= 'format';
    $vars[] .= 'platform';

    return $vars;
}
add_filter('query_vars', 'register_query_vars');
