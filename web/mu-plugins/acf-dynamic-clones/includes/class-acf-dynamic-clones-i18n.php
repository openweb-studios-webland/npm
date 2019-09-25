<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://viget.com
 * @since      1.0.0
 *
 * @package    Acf_Dynamic_Clones
 * @subpackage Acf_Dynamic_Clones/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Acf_Dynamic_Clones
 * @subpackage Acf_Dynamic_Clones/includes
 * @author     Justin Vandenberg <justin.vandenberg@viget.com>
 */
class Acf_Dynamic_Clones_i18n
{
    /**
     * Load the plugin text domain for translation.
     *
     * @since    1.0.0
     */
    public function load_plugin_textdomain()
    {
        load_plugin_textdomain(
            'acf-dynamic-clones',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }
}
