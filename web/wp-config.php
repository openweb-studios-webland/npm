<?php

/* Include any autoloaded Composer classes */
require_once dirname(__DIR__) . '/vendor/autoload.php';

/**
 * Expose global env() function from oscarotero/env
 * https://github.com/oscarotero/env
 */
Env::init();

/* Use Dotenv to set required environment variables and load .env file */
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
define('WP_SITEURL', env('WP_SITEURL'));
define('WP_HOME', env('WP_HOME'));
define('WP_CONTENT_DIR', dirname(__DIR__) . '/web');
define('WP_CONTENT_URL', WP_HOME);

// MySQL settings
define('DB_NAME', env('DB_NAME'));
define('DB_USER', env('DB_USER'));
define('DB_PASSWORD', env('DB_PASSWORD'));
define('DB_HOST', env('DB_HOST') ?: 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

$table_prefix = env('DB_PREFIX') ?: 'wp_';

// Authentication unique keys and salts
define('AUTH_KEY', env('AUTH_KEY'));
define('SECURE_AUTH_KEY', env('SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY', env('LOGGED_IN_KEY'));
define('NONCE_KEY', env('NONCE_KEY'));
define('AUTH_SALT', env('AUTH_SALT'));
define('SECURE_AUTH_SALT', env('SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT', env('LOGGED_IN_SALT'));
define('NONCE_SALT', env('NONCE_SALT'));

// Custom settings
define('WP_DEBUG', env('WP_ENV') !== 'prod' || env('WP_ENV') !== 'production' ? true : false);

// Absolute path to the WordPress directory
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__DIR__) . '/web/wp/');
}

// Sets up WordPress vars and included files
require_once ABSPATH . 'wp-settings.php';
