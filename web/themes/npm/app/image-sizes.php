<?php

/**
 * Add/modify image sizes
 * https://developer.wordpress.org/reference/functions/add_image_size/
 */
function add_custom_image_sizes()
{
    add_image_size('small', 640, 9999);
    add_image_size('medium', 768, 9999);
    add_image_size('large', 1024, 9999);
    add_image_size('xlarge', 1280, 9999);
    add_image_size('xxlarge', 1920, 9999);
}

add_action('after_setup_theme', 'add_custom_image_sizes');
