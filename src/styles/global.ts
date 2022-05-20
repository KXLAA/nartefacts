/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

export const colors = {
  blackPrimary: '#191919',
  blackSecondary: '#202020',
  grayPrimary: '#5A5A5A',
  graySecondary: '#363636',
}

export const testColors = {
  black: '#231651',
  white: '#FFFFFF',
}

// Theme
export const theme = {
  colors: {
    blackBase: '#191919',
    blackLight: '#202020',
    grayBase: '#363636',
    grayLight: '#5A5A5A',
    white: '#E3E3E3',
    red: '#630101',
  },
  text: {
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
    xl: '36px',
    xxl: '48px',
  },
  size: {
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    xxl: '128px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  borders: {
    none: 'none',
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
}
//Helper functions & Types
export type Size = keyof typeof theme.size
export type FontSize = keyof typeof theme.text

export const getFontSize = (fontSize: FontSize) => theme.text[fontSize]

export const getSize = (size: Size) => theme.size[size]

export const getColor = (color: keyof typeof theme.colors) =>
  theme.colors[color]

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    font-family: 'HeliosExt', sans-serif;
    background: ${getColor('blackBase')};
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`
