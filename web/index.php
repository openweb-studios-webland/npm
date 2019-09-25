<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

// Tells WordPress to load the WordPress theme and output it
define('WP_USE_THEMES', true);

// Loads the WordPress environment and template
require_once dirname(__FILE__) . '/wp/wp-blog-header.php';
