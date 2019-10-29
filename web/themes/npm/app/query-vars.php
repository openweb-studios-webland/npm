<?php

function npm_register_query_vars($vars)
{
    $vars[] .= 'format';
    $vars[] .= 'platform';

    return $vars;
}
add_filter('query_vars', 'npm_register_query_vars');
