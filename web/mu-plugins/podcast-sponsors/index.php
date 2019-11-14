<?php
/**
 * Plugin Name: Podcast Sponsors Plugin
 * Plugin URI: https://nationalpublicmedia.com
 * Description: A plugin for the podcast sponsors page. It renders https://nationalpublicmedia.com/podcastsponsors.
 * Version: 1.0
 * Author: NPM Creative
 * Author URI: https://nationalpublicmedia.com
 */

add_action('podcast_sponsors_content', 'render_podcast_sponsors');

function render_podcast_sponsors()
{
    require_once plugin_dir_path(__FILE__) . 'includes/main.php';
    $main = new Main();

    return $main->initializeData();
    // $main->render();
}
