<?php

/**
 * @link              https://viget.com
 * @since             1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:       Must-Use Autoloader
 * Plugin URI:        https://github.com/vigetlabs/VigetPress
 * Description:       Autoload must-use plugins.
 * Version:           1.0.0
 * Author:            Justin Vandenberg
 * Author URI:        https://viget.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       mu-autoloader
 */

if (!is_blog_installed()) {
    return;
}

class MuAutoloader
{
    private static $instance;
    private $cache;
    private $autoPlugins;
    private $muPlugins;
    private $count;
    private $activated;
    private $relativePath;

    public function __construct()
    {
        if (isset(self::$instance)) {
            return;
        }

        self::$instance = $this;
        $this->relativePath = '/../' . basename(__DIR__);

        if (is_admin()) {
            add_filter('show_advanced_plugins', [$this, 'showInAdmin'], 0, 2);
        }

        $this->loadPlugins();
    }

    // Run some checks then autoload our plugins
    public function loadPlugins()
    {
        $this->checkCache();
        $this->validatePlugins();
        $this->countPlugins();

        array_map(static function () {
            include_once WPMU_PLUGIN_DIR . '/' . func_get_args()[0];
        }, array_keys($this->cache['plugins']));

        $this->pluginHooks();
    }

    // Filter show_advanced_plugins to display the autoloaded plugins
    public function showInAdmin($show, $type)
    {
        $screen = get_current_screen();
        $current = is_multisite() ? 'plugins-network' : 'plugins';

        if ($screen->base !== $current || $type !== 'mustuse' || !current_user_can('activate_plugins')) {
            return $show;
        }

        $this->updateCache();

        $this->autoPlugins = array_map(function ($auto_plugin) {
            $auto_plugin['Name'] .= ' *';
            return $auto_plugin;
        }, $this->autoPlugins);

        $GLOBALS['plugins']['mustuse'] = array_unique(array_merge($this->autoPlugins, $this->muPlugins), SORT_REGULAR);

        return false;
    }

    // Set the cache or call for an update
    private function checkCache()
    {
        $cache = get_site_option('mu_autoloader');

        if ($cache === false || (isset($cache['plugins'], $cache['count']) && count($cache['plugins']) !== $cache['count'])) {
            $this->updateCache();
            return;
        }

        $this->cache = $cache;
    }

    // Get the plugins and mu-plugins from the mu-plugin path and remove duplicates, then update cache
    private function updateCache()
    {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';

        $this->autoPlugins = get_plugins($this->relativePath);
        $this->muPlugins = get_mu_plugins();

        $plugins = array_diff_key($this->autoPlugins, $this->muPlugins);
        $rebuild = !is_array($this->cache['plugins']);

        $this->activated = $rebuild ? $plugins : array_diff_key($plugins, $this->cache['plugins']);
        $this->cache = [
            'plugins' => $plugins,
            'count' => $this->countPlugins(),
        ];

        update_site_option('mu_autoloader', $this->cache);
    }

    // Add plugin hooks ad if they were loaded as usual
    private function pluginHooks()
    {
        if (!is_array($this->activated)) {
            return;
        }

        foreach ($this->activated as $plugin_file => $plugin_info) {
            do_action('activate_' . $plugin_file);
        }
    }

    // Check that the plugin file exists and update the cache if it does not
    private function validatePlugins()
    {
        foreach ($this->cache['plugins'] as $plugin_file => $plugin_info) {
            if (!file_exists(WPMU_PLUGIN_DIR . '/' . $plugin_file)) {
                $this->updateCache();
                break;
            }
        }
    }

    // Count the number of autoloaded plugins
    private function countPlugins()
    {
        if (isset($this->count)) {
            return $this->count;
        }

        $count = count(glob(WPMU_PLUGIN_DIR . '/*/', GLOB_ONLYDIR | GLOB_NOSORT));

        if (!isset($this->cache['count']) || $count !== $this->cache['count']) {
            $this->count = $count;
            $this->updateCache();
        }

        return $this->count;
    }
}

new MuAutoloader();
