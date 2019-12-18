module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: {
        semitransparent: 'rgba(22, 22, 22, 0.25)',
        default: '#161616',
      },
      white: {
        semitransparent: 'rgba(255, 255, 255, 0.25)',
        default: '#fff',
      },
      crimson: {
        dark: '#c22a49',
        default: '#db3053',
      },
      purple: '#161c58',
      teal: '#0c8483',
      blue: {
        light: '#65bdff',
        denim: '#0a6eb9',
        default: '#242c70',
      },
      gray: {
        dark: '#707070',
        border: '#e1e1e1',
        default: '#f4f4f4',
      },
    },
    spacing: {
      '0': '0',
      '1': '0.0625rem',
      '5': '0.3125rem',
      '10': '0.625rem',
      '15': '0.9375rem',
      '20': '1.25rem',
      '25': '1.5625rem',
      '30': '1.875rem',
      '40': '2.5rem',
      '45': '2.8125rem',
      '50': '3.125rem',
      '55': '3.4375rem',
      '60': '3.75rem',
      '75': '4.6875rem',
      '80': '5rem',
      '100': '6.25rem',
      '130': '8.125rem',
      '150': '9.375rem',
      '200': '12.5rem',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.border', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      full: '9999px',
      default: '10px',
    },
    borderWidth: {
      '0': '0',
      '2': '2px',
      default: '1px',
    },
    boxShadow: {
      none: 'none',
      xs: '0px 5px 10px rgba(0, 0, 0, 0.15)',
      sm: '0px 20px 30px rgba(0, 0, 0, 0.15)',
      md: '0px 10px 20px rgba(0, 0, 0, 0.25)',
      lg: '0px 30px 40px rgba(0, 0, 0, 0.25)',
      default: '0px 30px 30px rgba(0, 0, 0, 0.15)',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      none: 'none',
      '0': '0 0 auto',
      '1': '1 1 auto',
      '1-1-0': '1 1 0',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: ['Gotham SSm', 'Gotham', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Times', 'Times New Roman', 'serif'],
    },
    fontSize: {
      '10': '0.625rem',
      '11': '0.6875rem',
      '12': '0.75rem',
      '14': '0.875rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '22': '1.375rem',
      '24': '1.5rem',
      '30': '1.875rem',
      '36': '2.25rem',
      '42': '2.625rem',
      '48': '3rem',
      '88': '5.5rem',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    height: theme => ({
      auto: 'auto',
      '0': '0',
      '10': '0.625rem',
      '14': '0.875rem',
      '24': '1.5rem',
      '32': '2rem',
      '44': '2.75rem',
      '80': '5rem',
      '100': '6.25rem',
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      '1/2': '50%',
      auto: 'auto',
    },
    letterSpacing: {
      normal: '0',
      wide: '0.1em',
    },
    lineHeight: {
      none: '1',
      tighter: '1.2',
      tight: '1.4',
      normal: '1.6',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      '0': '0',
      none: 'none',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      '200': '200px',
      '230': '230px',
      none: 'none',
      '1/2': '50%',
      full: '100%',
      screen: '100vw',
    },
    minHeight: {
      '0': '0',
      '40': '40px',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '50': '0.5',
      '75': '0.75',
      '90': '0.9',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
    },
    padding: theme => theme('spacing'),
    rotate: {
      '180': ['180deg']
    },
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.33333%',
      '5/12': '41.66667%',
      '1/2': '50%',
      '7/12': '58.33333%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '24': '1.5rem',
      '32': '2rem',
      '44': '2.75rem',
      '80': '5rem',
      '100': '6.25rem',
      full: '100%',
      'screen-5/12': '41.66667vw',
      'screen-1/2': '50vw',
      'screen-7/12': '58.33333vw',
      'screen-2/3': '66.66667vw',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      '1': '-1',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: false,
    backgroundAttachment: false,
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: false,
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: [],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: [],
    display: ['responsive', 'hover', 'group-hover', 'focus'],
    fill: [],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: [],
    fontSize: ['responsive'],
    fontSmoothing: false,
    fontStyle: ['responsive'],
    fontWeight: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: false,
    listStyleType: false,
    margin: ['responsive', 'first', 'last'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    order: ['responsive'],
    outline: false,
    overflow: ['responsive'],
    padding: ['responsive', 'first', 'last'],
    pointerEvents: [],
    position: ['responsive'],
    resize: false,
    rotate: ['parent-expanded'],
    stroke: false,
    tableLayout: false,
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: false,
    verticalAlign: [],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    whitespace: [],
    width: ['responsive'],
    wordBreak: false,
    zIndex: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('./plugins/aspect-ratio')({
      dimensions: {
        square: [1, 1],
        '16/9': [16, 9],
        '9/4': [9, 4],
        '10/33': [33, 10],
        '10/7': [7, 10],
        '25/21': [25, 21],
      },
      variants: ['responsive'],
    }),
    require('./plugins/parent-expanded')(),
    require('./plugins/transition')({
      transitions: {
        slow: 'all 0.4s ease',
        fast: 'all 0.2s ease',
        default: 'all 0.3s ease',
      },
    }),
    require('tailwindcss-transforms')(),
  ],
}
