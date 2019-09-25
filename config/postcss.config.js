const dotenv = require('dotenv').config()
const glob = require('glob')
const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const TEMPLATE_EXT = 'twig'

//å Custom Tailwind extractor for Purgecss
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

/**
 * Template dependency plugin
 *
 * This plugin allows the use of purgecss in development
 * When classes are added in html files the CSS needs to be rebuilt
 */
const templateDependency = postcss.plugin('templateDependency', directory => {
  directory = path.resolve(__dirname, directory)
  let htmlFiles = glob.sync(directory + `/**/*.${TEMPLATE_EXT}`, {})

  /**
   * Add each file as a dependency of the CSS
   * i.e. rebuild styles when html files are changed
   */
  return function(css, opts) {
    htmlFiles.forEach(file => {
      opts.messages.push({
        type: 'dependency',
        file: file,
        parent: css.source.input.file,
      })
    })
  }
})

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./config/tailwindcss/tailwindcss.config.js'),
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    }),
    templateDependency(`../${process.env.THEME_PATH}/views`), // Adds html files in theme directory as CSS
    purgecss({
      content: [
        `${process.env.THEME_PATH}/views/**/*.${TEMPLATE_EXT}`,
        `${process.env.THEME_PATH}/src/scripts/**/*.js`,
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: [TEMPLATE_EXT],
        },
      ],
    }),
    cssnano({
      preset: 'default',
    }),
  ],
}
