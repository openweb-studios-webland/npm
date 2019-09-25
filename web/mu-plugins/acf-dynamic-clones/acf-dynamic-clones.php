<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://viget.com
 * @since             1.0.0
 * @package           Acf_Dynamic_Clones
 *
 * @wordpress-plugin
 * Plugin Name:       ACF Dynamic Clones
 * Plugin URI:        https://github.com/vigetlabs/acf-dynamic-clones
 * Description:       Dynamically clone ACF field groups to be added to multiple flexible content fields.
 * Version:           1.0.2
 * Author:            Justin Vandenberg
 * Author URI:        https://viget.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       acf-dynamic-clones
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('ACF_DYNAMIC_CLONES_VERSION', '1.0.2');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-acf-dynamic-clones-activator.php
 */
function activate_acf_dynamic_clones()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-acf-dynamic-clones-activator.php';
    Acf_Dynamic_Clones_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-acf-dynamic-clones-deactivator.php
 */
function deactivate_acf_dynamic_clones()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-acf-dynamic-clones-deactivator.php';
    Acf_Dynamic_Clones_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_acf_dynamic_clones');
register_deactivation_hook(__FILE__, 'deactivate_acf_dynamic_clones');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-acf-dynamic-clones.php';

/**
 * Wrap acf_dynamic_clones_add_local_field_group method in a function.
 *
 * @since     1.0.0
 * @return    method    The method acf_dynamic_clones_add_local_field_group.
 */
function acf_dynamic_clones_add_local_field_group($field_group)
{
    return Acf_Dynamic_Clones_Admin::acf_dynamic_clones_add_local_field_group($field_group);
}

/**
 * Wrap acf_dynamic_clones_get_local_field_group method in a function.
 *
 * @since     1.0.0
 * @return    method    The method acf_dynamic_clones_get_local_field_group.
 */
function acf_dynamic_clones_get_local_field_group($field_group)
{
    return Acf_Dynamic_Clones_Admin::acf_dynamic_clones_get_local_field_group($field_group);
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_acf_dynamic_clones()
{

    $plugin = new Acf_Dynamic_Clones();
    $plugin->run();

}
run_acf_dynamic_clones();
