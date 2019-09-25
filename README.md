![VigetPress](https://user-images.githubusercontent.com/8126358/50785980-6f54a980-126f-11e9-924a-fc073c93dc77.png)

- [Setup](#setup)
- [Development](#development)
- [Production](#production)
- [Advanced Custom Fields](#advanced-custom-fields)
- [File Structure](#file-structure)
- [Examples](#examples)
- [Other Resources](#other-resources)
- [ACF Dynamic Clones Plugin](https://github.com/vigetlabs/acf-dynamic-clones)

---

## Setup

Use this project as a template for your project by selecting **Use this template** button.

Copy `.env.example` and populate the variables:

```bash
$ cp .env{.example,}
```

Install PHP dependencies (Composer should create `wp` and `wp-content/plugins` directories):

```bash
$ composer install
```

Install NPM dependencies:

```bash
$ yarn
```

Replace all instances of **VigetPress** in `package.json` and `composer.json`.

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

---

## File Structure

### Blocks

Found in `THEME -> views -> _blocks`.

```
├── _block-name
│   ├── index.css
│   ├── acf.php
│   ├── index.twig
```

### Templates

Found in `THEME -> views`.

```
├── template-name.php
├── templates
│   ├── template-name
│   │   ├── acf.php
│   │   ├── index.twig
```

## Examples

### Simple template-name.php:

```php
<?php

$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['acf'] = get_fields();

Timber::render('templates/template-name/index.twig', $context);
```

### Images

```html
{% set image = TimberImage(FIELD_NAME) %}

<img src="{{ image.src | resize(300, 200) }}" srcset="{{ image.srcset }}" alt="{{ image.alt }}" />
```

### Inline SVGs

[SVG Twig Extension](https://github.com/manuelodelain/svg-twig-extension)

`{{ svg('FILE_NAME.svg', {attr: {id: 'ID_NAME', class: 'CLASS_NAME'}}) }}`

---

## Other Resources

- [Timber Wiki](https://github.com/jarednova/timber/wiki)
- [Advanded Custom Fields Docs](https://www.advancedcustomfields.com/resources)
- [Register Advanded Custom Fields via PHP](https://www.advancedcustomfields.com/resources/register-fields-via-php/)
- [ACF Dynamic Clones Plugin](https://github.com/vigetlabs/acf-dynamic-clones)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/)
