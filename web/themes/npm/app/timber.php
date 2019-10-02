<?php

use manuelodelain\Twig\Extension\SvgExtension;

// Ensure that Timber is loaded and available as a PHP class
if (!class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
    });

    return;
}

// Set the location of the Twig files
Timber::$dirname = array('templates', 'views');

// By default, Timber does NOT autoescape values
Timber::$autoescape = false;

class Site extends Timber\Site
{

    public function __construct()
    {
        add_theme_support('menus');

        add_filter('timber_context', array($this, 'add_to_context'));
        add_filter('get_twig', array($this, 'add_to_twig'));

        add_action('wp_enqueue_scripts', array($this, 'enqueue'));

        parent::__construct();
    }

    public function add_to_context($context)
    {
        $context['menu']['header'] = new Timber\Menu('header', ['depth' => 2]);
        $context['menu']['footer'] = new Timber\Menu('footer', ['depth' => 1]);
        $context['site'] = $this;

        return $context;
    }

    public function add_to_twig($twig)
    {
        // Add custom functions to Twig
        $twig->addExtension(new SvgExtension('themes/npm/assets/images'));

        return $twig;
    }

    public function enqueue()
    {
        function get_asset_path($file_name)
        {
            // Cache the decoded manifest so that we only read it in once
            $manifest_content = null;

            if (null === $manifest_content) {
                $manifest_path = get_stylesheet_directory() . '/build/manifest.json';
                $manifest_content = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : [];
            }

            // If the manifest contains the requested file return the hashed name
            if (array_key_exists($file_name, $manifest_content)) {
                return "/build/{$manifest_content[$file_name]}";
            }

            // Assume the file has not been hashed when it was not found in the manifest
            return "/build/{$file_name}";
        }

        wp_enqueue_script('scripts', get_template_directory_uri() . get_asset_path('app.js'), array(), false, true);

        if (env('WP_ENV') !== 'dev' && env('WP_ENV') !== 'development') {
            wp_enqueue_style('styles', get_template_directory_uri() . get_asset_path('app.css'));
        }

        return;
    }

    public function dequeue_scripts()
    {
        if (!is_admin()) {
            wp_deregister_script('jquery');
        }

        return;
    }
}

new Site();
