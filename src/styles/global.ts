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
    background: #191919;
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
