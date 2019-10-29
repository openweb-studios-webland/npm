<?php

/**
 * Add/modify image sizes
 * https://developer.wordpress.org/reference/functions/add_image_size/
 */
function npm_add_custom_image_sizes()
{
    add_image_size('small', 640);
    add_image_size('medium', 768);
    add_image_size('large', 1024);
    add_image_size('xlarge', 1280);
    add_image_size('xxlarge', 1920);
}

add_action('after_setup_theme', 'npm_add_custom_image_sizes');
