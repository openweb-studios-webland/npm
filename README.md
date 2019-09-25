# National Public Media

- [Links](#links)
- [Setup](#setup)
- [Development](#development)
- [Production](#production)
- [Advanced Custom Fields](#advanced-custom-fields)
- [Images](#examples)
- [Other Resources](#images)
- [ACF Dynamic Clones Plugin](https://github.com/vigetlabs/acf-dynamic-clones)

---

## Links

- [Viget Repo](https://github.com/vigetlabs/npm)
- [NPM Repo](https://github.com/nationalpublicmedia/npm-website)
- [Figma](https://www.figma.com/file/NmTYeQFyu7XPlzTMSKFOzF/NPM-Comps-For-Buildout?node-id=905%3A3651)
- [AirTable](https://airtable.com/tbl0NFo4zvJAW92mn/viwWNHnIfy2IUsIwc?blocks=hide)

---

## Setup

Use this project as a template for your project by selecting **Use this template** button.

Copy `.env.example` and populate the variables:

```bash
$ cp .env{.example,}
```

Copy `.htaccess.example` and make any neccessary changes:

```bash
$ cp .htaccess{.example,}
```

Install PHP dependencies (Composer should create `wp` and `wp-content/plugins` directories):

```bash
$ composer install
```

Install NPM dependencies:

```bash
$ yarn
```

---

## Development

Run local dev server:

```bash
$ yarn start
```

---

## Production

Build for production:

```bash
$ yarn build
```

---

## Advanced Custom Fields

Field groups can be exported directly from the WordPress admin. Advanced Custom Fields' export tool can be found at `Custom Fields -> Tools -> Generate PHP`.

### Blocks

A clone of this field group will be included in the template below.

There is no need to include anything below the fields array (location, style, etc.) as blocks are location agnostic. **Partials** can be handled the same.

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

### Templates

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
        'button_label' => 'Add a Component',
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

## Images

```html
{% set image = TimberImage(FIELD_NAME) %}

<img src="{{ image.src | resize(300, 200) }}" srcset="{{ image.srcset }}" alt="{{ image.alt }}" />
```

---

## Other Resources

- [Timber Wiki](https://github.com/jarednova/timber/wiki)
- [Advanded Custom Fields Docs](https://www.advancedcustomfields.com/resources)
- [Register Advanded Custom Fields via PHP](https://www.advancedcustomfields.com/resources/register-fields-via-php/)
- [ACF Dynamic Clones Plugin](https://github.com/vigetlabs/acf-dynamic-clones)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/)
