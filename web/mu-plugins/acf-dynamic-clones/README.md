# ACF Dynamic Clones Plugin

- [Setup](#setup)
- [How to Use](#how-to-use)
- [Other Resources](#other-resources)

---

## Setup

Install a theme:
[VigetPress (recommended)](https://github.com/vigetlabs/VigetPress)

Navigate to the `wp-content/plugins` or `wp-content/mu-plugins` directory and clone this repository:

```bash
$ git clone git@github.com:vigetlabs/acf-dynamic-clones.git
```

---

## How to Use

### Field Group To-Be Cloned

A clone of this field group will be included in the flexible content field below.

```php
<?php

if (function_exists('acf_dynamic_clones_add_local_field_group')):

  acf_dynamic_clones_add_local_field_group(array(
    'key' => 'group_sl8vedxn6m0ys', // Field group key must be unique
    'title' => 'Field Title', // i.e. acf_dynamic_clones_get_local_field_group('field_title')
    'fields' => array(
      array(
        'key' => 'field_5c01864090ec7', // Field key must be unique
        'label' => 'Field Label',
        'name' => 'field-name',
        'type' => 'text',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
      ),
    ),
  ));

endif;
```

### Flexible Content Field

Add `acf_dynamic_clones_get_local_field_group('field_title')` to the layouts array.

```php
<?php

if (function_exists('acf_add_local_field_group')):

  acf_add_local_field_group(array(
    'key' => 'group_dqks9ku34dgjo', // Field group key must be unique
    'title' => 'Page Title',
    'fields' => array(
        array(
        'key' => 'field_c991lat3ewp0o', // Field key must be unique
        'label' => 'Components',
        'name' => 'components',
        'type' => 'flexible_content',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'layouts' => array(
          acf_dynamic_clones_get_local_field_group('field_title'), // Use field group title with dashes or underscores for spaces
          acf_dynamic_clones_get_local_field_group('another_field_title'),
        ),
        'button_label' =>  Component',
        'min' => '',
        'max' => '',
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_template',
          'operator' => '==',
          'value' => 'template.php',
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'acf_after_title',
    'style' => 'seamless',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => array(
      0 => 'the_content',
      1 => 'excerpt',
      2 => 'discussion',
      3 => 'comments',
      4 => 'featured_image',
      5 => 'slug',
      6 => 'author',
    ),
    'active' => 1,
    'description' => '',
  ));

endif;
```

---

## Other Resources

- [Advanced Custom Fields Docs](https://www.advancedcustomfields.com/resources)
- [Register Advanded Custom Fields via PHP](https://www.advancedcustomfields.com/resources/register-fields-via-php/)
