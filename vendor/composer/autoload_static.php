<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5714cf7dbe6c47d3a79f0de15ac8a442
{
    public static $files = array (
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'm' => 
        array (
            'manuelodelain\\Twig\\Extension\\' => 29,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Ctype\\' => 23,
        ),
        'P' => 
        array (
            'PhpOption\\' => 10,
        ),
        'F' => 
        array (
            'FFraenz\\PrivateComposerInstaller\\' => 33,
        ),
        'D' => 
        array (
            'Dotenv\\' => 7,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'manuelodelain\\Twig\\Extension\\' => 
        array (
            0 => __DIR__ . '/..' . '/manuelodelain/svg-twig-extension/src',
        ),
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'PhpOption\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpoption/phpoption/src/PhpOption',
        ),
        'FFraenz\\PrivateComposerInstaller\\' => 
        array (
            0 => __DIR__ . '/..' . '/ffraenz/private-composer-installer/src/PrivateComposerInstaller',
        ),
        'Dotenv\\' => 
        array (
            0 => __DIR__ . '/..' . '/vlucas/phpdotenv/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $prefixesPsr0 = array (
        'j' => 
        array (
            'johnpbloch\\Composer\\' => 
            array (
                0 => __DIR__ . '/..' . '/johnpbloch/wordpress-core-installer/src',
            ),
        ),
        'E' => 
        array (
            'Env' => 
            array (
                0 => __DIR__ . '/..' . '/oscarotero/env/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5714cf7dbe6c47d3a79f0de15ac8a442::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5714cf7dbe6c47d3a79f0de15ac8a442::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit5714cf7dbe6c47d3a79f0de15ac8a442::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
