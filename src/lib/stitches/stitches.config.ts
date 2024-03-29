/* istanbul ignore file */

import { createStitches, PropertyValue } from '@stitches/react'

import {
  GetCss,
  ScaleVariant,
  Theme,
  ThemeProps,
  TokenByScaleName,
} from '@/lib/stitches'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  prefix: 'nartefacts',
  theme: {
    colors: {
      'white-base': '#E3E3E3',
      'black-base': '#191919',
      'black-light': '#202020',
      'gray-base': '#363636',
      'gray-light': '#5A5A5A',
      'red-base': '#630101',
    },

    /* Typography  */
    fonts: {
      primary: 'HeliosExt, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },

    fontWeights: {
      regular: 400,
      bold: 700,
    },

    fontSizes: {
      sm: '0.875rem', //14px
      base: '1rem', //16px
      md: '1.125rem', //18px
      lg: '1.5rem', //24px
      xl: '2.25rem', //36px
      '2xl': '3rem', //48px
    },

    lineHeights: {
      sm: '0.875rem', //14px
      base: '1rem', //16px
      md: '1.125rem', //18px
      lg: '1.5rem', //24px
      xl: '2.25rem', //36px
      '2xl': '3rem', //48px,
    },

    borderWidths: {
      none: '0px',
      sm: '1px',
      base: '2px',
      lg: '4px',
      xl: '8px',
    },

    /* Spacing */
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px',
    },

    /* Sizes */
    sizes: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px',
      32: '128px',
      40: '160px',
      48: '192px',
      56: '224px',
      64: '256px',
      72: '288px',
      80: '320px',
      88: '352px',
      96: '384px',
      104: '416px',
      112: '448px',
      120: '480px',
      128: '512px',
      136: '544px',
    },

    /* Border Radii */
    radii: {
      'rounded-none': '0px',
      'rounded-sm': '4px',
      rounded: '8px',
      'rounded-md': '12px',
      'rounded-lg': '16px',
      'rounded-full': '50%',
      'rounded-pill': '9999px',
    },
  },

  media: {
    /* Breakpoints */
    sm: '(min-width: 640px)', // width >= 640px
    md: '(min-width: 768px)', // width >= 768px
    lg: '(min-width: 1024px)', //width >= 1024px
    xl: '(min-width: 1280px)', // width >= 1280px
    '2xl': '(min-width: 1536px)', //width >= 1536px
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    /* A property for applying width/height together */
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    w: (value: PropertyValue<'width'>) => ({
      width: value,
    }),

    h: (value: PropertyValue<'height'>) => ({
      height: value,
    }),

    /*  A property to apply linear gradient */
    linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    /* Abbreviated padding properties */
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    /* Abbreviated margin properties */
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    getBorder: (value: {
      style: PropertyValue<'borderStyle'>
      width: PropertyValue<'borderWidth'>
      color: PropertyValue<'borderColor'>
    }) => ({
      borderStyle: value.style,
      borderWidth: value.width,
      borderColor: value.color,
    }),

    // An abbreviated property for border-radius
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    // An abbreviated property for border-radius
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': { margin: 0 },
  ' *, *::before, *::after': {
    boxSizing: 'border-box',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%;',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    'line-height': '1.5',
    'font-family': '$primary',
    background: '$black-base',
    color: '$gray-light',
    fontSize: '$lg',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  ' #root, #__next': {
    isolation: 'isolate',
  },
})

/**
 *  This allows us to pass tokens defined in themes eg 'green-25', 'green-50' without the $ prefix
 * eg '$green-25' can be passed as 'green-25'
 */
export const resolveToken = <T extends ThemeProps>(value: T) => {
  if (value.startsWith('$')) {
    return value
  }
  return `$${value}`
}

export const createScaleVariant = <ScaleName extends keyof Theme>(
  scaleName: ScaleName,
  getCss: GetCss<ScaleName>,
): ScaleVariant<ScaleName> => {
  return Object.keys(theme[scaleName]).reduce(
    (acc, key) => ({
      ...acc,
      [key]: getCss(`$${key}` as TokenByScaleName<ScaleName>),
    }),
    {} as any,
  )
}

/** Base Variants */
export const BASE_VARIANTS = {
  height: {
    ...createScaleVariant('sizes', (token) => ({ height: token })),
  },
  width: {
    ...createScaleVariant('sizes', (token) => ({ width: token })),
  },

  size: {
    ...createScaleVariant('sizes', (token) => ({
      height: token,
      width: token,
    })),
  },

  mb: createScaleVariant('space', (token) => ({ marginBottom: token })),
  ml: createScaleVariant('space', (token) => ({ marginLeft: token })),
  mr: createScaleVariant('space', (token) => ({ marginRight: token })),
  mt: createScaleVariant('space', (token) => ({ marginTop: token })),
  mx: createScaleVariant('space', (token) => ({
    marginLeft: token,
    marginRight: token,
  })),
  my: createScaleVariant('space', (token) => ({
    marginBottom: token,
    marginTop: token,
  })),
  m: createScaleVariant('space', (token) => ({
    margin: token,
  })),
  p: createScaleVariant('space', (token) => ({ padding: token })),
  pb: createScaleVariant('space', (token) => ({ paddingBottom: token })),
  pl: createScaleVariant('space', (token) => ({ paddingLeft: token })),
  pr: createScaleVariant('space', (token) => ({ paddingRight: token })),
  pt: createScaleVariant('space', (token) => ({ paddingTop: token })),
  px: createScaleVariant('space', (token) => ({
    paddingLeft: token,
    paddingRight: token,
  })),
  py: createScaleVariant('space', (token) => ({
    paddingBottom: token,
    paddingTop: token,
  })),
}

export const COLOR_VARIANTS = {
  bg: {
    ...createScaleVariant('colors', (token) => ({ bg: token })),
  },

  color: {
    ...createScaleVariant('colors', (token) => ({ color: token })),
  },
}
