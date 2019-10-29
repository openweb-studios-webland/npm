<?php

// Fixes 404 error on custom post type pagination
function npm_posts_per_page($query)
{
    if ($query->is_archive('cpt_name') || $query->is_category()) {
        set_query_var('posts_per_page', 1);
    }
}

add_action('pre_get_posts', 'npm_posts_per_page');
