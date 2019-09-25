<?php
/**
 * This config file is yours to hack on. It will work out of the box on Pantheon
 * but you may find there are a lot of neat tricks to be used here.
 *
 * See our documentation for more details:
 *
 * https://pantheon.io/docs
 */

require_once dirname(__DIR__) . '/vendor/autoload.php';

if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {

    // Pantheon config
    define('DB_NAME',     $_ENV['DB_NAME']);
    define('DB_USER',     $_ENV['DB_USER']);
    define('DB_PASSWORD', $_ENV['DB_PASSWORD']);
    define('DB_HOST',     $_ENV['DB_HOST'] . ':' . $_ENV['DB_PORT']);
    define('DB_CHARSET',  'utf8');
    define('DB_COLLATE',  '');

    define('AUTH_KEY',         $_ENV['AUTH_KEY']);
    define('SECURE_AUTH_KEY',  $_ENV['SECURE_AUTH_KEY']);
    define('LOGGED_IN_KEY',    $_ENV['LOGGED_IN_KEY']);
    define('NONCE_KEY',        $_ENV['NONCE_KEY']);
    define('AUTH_SALT',        $_ENV['AUTH_SALT']);
    define('SECURE_AUTH_SALT', $_ENV['SECURE_AUTH_SALT']);
    define('LOGGED_IN_SALT',   $_ENV['LOGGED_IN_SALT']);
    define('NONCE_SALT',       $_ENV['NONCE_SALT']);

    // A couple extra tweaks to help things run well on Pantheon
    if (isset($_SERVER['HTTP_HOST'])) {
        // HTTP is still the default scheme for now
        $scheme = 'http';

        /**
         * If we have detected that the end use is HTTPS, make sure we pass that
         * through here, so <img> tags and the like don't generate mixed-mode
         *  content warnings.
         */
        if (isset($_SERVER['HTTP_USER_AGENT_HTTPS']) && $_SERVER['HTTP_USER_AGENT_HTTPS'] == 'ON') {
            $scheme = 'https';
            $_SERVER['HTTPS'] = 'on';
        }
    }

    define('WP_HOME',    $scheme . '://' . $_SERVER['HTTP_HOST']);
    define('WP_SITEURL', $scheme . '://' . $_SERVER['HTTP_HOST'] . '/wp');

    define('WP_CONTENT_DIR', dirname(__DIR__) . '/web');
    define('WP_CONTENT_URL', WP_HOME);

    // Don't show deprecations; useful under PHP 5.5
    error_reporting(E_ALL ^ E_DEPRECATED);

    // Define appropriate location for default tmp directory on Pantheon
    define('WP_TEMP_DIR', $_SERVER['HOME'] . '/tmp');

    // FS writes aren't permitted in test or live, so we should let WordPress know to disable relevant UI
    if (in_array($_ENV['PANTHEON_ENVIRONMENT'], array('test', 'live')) && !defined('DISALLOW_FILE_MODS')) {
        define('DISALLOW_FILE_MODS', true);
    }

} else {

    // Local config
    Env::init();

    // Use Dotenv to set required environment variables and load .env file
    $dotenv = Dotenv\Dotenv::create(dirname(__DIR__));

    if (file_exists(dirname(__DIR__) . '/.env')) {
        $dotenv->load();
        $dotenv->required(['WP_HOME', 'WP_SITEURL']);

        if (!env('DATABASE_URL')) {
            $dotenv->required(['DB_NAME', 'DB_USER', 'DB_PASSWORD']);
        }
    }

    define('WP_ENV', env('WP_ENV') ?: 'production');

    // Custom WordPress directory
    define('WP_SITEURL',     env('WP_SITEURL'));
    define('WP_HOME',        env('WP_HOME'));
    define('WP_CONTENT_DIR', dirname(__DIR__) . '/web');
    define('WP_CONTENT_URL', WP_HOME);

    // MySQL settings
    define('DB_NAME',     env('DB_NAME'));
    define('DB_USER',     env('DB_USER'));
    define('DB_PASSWORD', env('DB_PASSWORD'));
    define('DB_HOST',     env('DB_HOST') ?: 'localhost');
    define('DB_CHARSET',  'utf8mb4');
    define('DB_COLLATE',  '');

    $table_prefix = env('DB_PREFIX') ?: 'wp_';

    // Authentication unique keys and salts
    define('AUTH_KEY',         env('AUTH_KEY'));
    define('SECURE_AUTH_KEY',  env('SECURE_AUTH_KEY'));
    define('LOGGED_IN_KEY',    env('LOGGED_IN_KEY'));
    define('NONCE_KEY',        env('NONCE_KEY'));
    define('AUTH_SALT',        env('AUTH_SALT'));
    define('SECURE_AUTH_SALT', env('SECURE_AUTH_SALT'));
    define('LOGGED_IN_SALT',   env('LOGGED_IN_SALT'));
    define('NONCE_SALT',       env('NONCE_SALT'));
}

// Standard wp-config.php stuff below

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * e_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * You may want to examine $_ENV['PANTHEON_ENVIRONMENT'] to set this to be
 * "true" in dev, but false in test and live.
 *
 */
if (!defined('WP_DEBUG')) {
    define('WP_DEBUG', isset($_ENV['PANTHEON_ENVIRONMENT']) || env('WP_ENV') === 'staging' ? false : true);
}

// Absolute path to the WordPress directory
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

// Sets up WordPress vars and included files
require_once ABSPATH . 'wp-settings.php';
