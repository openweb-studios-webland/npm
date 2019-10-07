<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://viget.com
 * @since      1.0.0
 *
 * @package    Acf_Dynamic_Clones
 * @subpackage Acf_Dynamic_Clones/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * @package    Acf_Dynamic_Clones
 * @subpackage Acf_Dynamic_Clones/admin
 * @author     Justin Vandenberg <justin.vandenberg@viget.com>
 */
class Acf_Dynamic_Clones_Admin
{
    /**
     * The ID of this plugin.
     *
     * @since     1.0.0
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since     1.0.0
     */
    private $version;

    /**
     * The field groups object.
     *
     * @since     1.0.0
     */
    public static $field_groups;

    /**
     * Initialize the class and set its properties.
     *
     * @since     1.0.0
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    /**
     * Require ACF fields from specified directory.
     *
     * @since     1.0.0
     * @return
     */
    public function acf_dynamic_clones_get_local_field_groups()
    {
        $directory_name = 'views';
        $directory_paths = glob(
            get_template_directory() . "/{$directory_name}/**/*",
            GLOB_ONLYDIR
        );
        $file_name = 'fields';

        foreach ($directory_paths as $directory_path) {
            $file_basename = basename($directory_path);
            $file_path = $directory_path . "/{$file_name}.php";

            if (file_exists($file_path)) {
                require_once $file_path;
            }
        }

        return;
    }

    /**
     * Clone field group and make it accessible for ACF.
     *
     * @since     1.0.0
     * @return
     */
    public static function acf_dynamic_clones_add_local_field_group($field_group)
    {
        $field_group['active'] = false;
        $field_group_name = strtolower(str_replace(' ', '-', $field_group['title']));
        $field_group_key = $field_group['key'];

        self::$field_groups[$field_group_name] = $field_group_key;

        if (isset($field_group['location'])) {
            unset($field_group['location']);
        }

        acf_add_local_field_group($field_group);

        $field_group['fields'] = [
            [
                'type' => 'clone',
                'clone' => [
                    0 => $field_group_key,
                ],
                'prefix_name' => 1,
                'display' => 'seamless',
                'layout' => 'block',
                'key' => "cloned_sub_field_group_{$field_group_key}",
                'name' => $field_group_name,
                'label' => $field_group['title'],
            ],
        ];

        $field_group['key'] = "cloned_field_group_{$field_group_key}";
        unset($field_group['active']);

        acf_add_local_field_group($field_group);

        return;
    }

    /**
     * Add cloned sub field group to a original field group.
     *
     * @since     1.0.0
     * @return    object    The newly created field group.
     */
    public static function acf_dynamic_clones_get_local_field_group($field_group_label, $field_group_name)
    {
        $field_group_hash = substr(md5($field_group_name), 0, 13);
        $field_group_key = "field_{$field_group_hash}";

        $field_group = [
            'key' => $field_group_key,
            'label' => $field_group_label,
            'name' => $field_group_name,
            'sub_fields' => [
                [

                    'key' => $field_group_key,
                    'name' => $field_group_name,
                    'type' => 'clone',
                    'clone' => [
                        0 => self::$field_groups[$field_group_name],
                    ],
                    'display' => 'seamless',
                    'layout' => 'block',
                ],
            ],
        ];

        return $field_group;
    }
}
