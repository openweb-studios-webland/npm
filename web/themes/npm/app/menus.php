<?php

function npm_register_custom_nav_menus()
{
    register_nav_menus(array(
        'header' => 'Header',
        'footer' => 'Footer',
        'resources' => 'Footer (Resources)',
        'utilities' => 'Foooter (Utilities)',
    ));
}

add_action('after_setup_theme', 'npm_register_custom_nav_menus');
