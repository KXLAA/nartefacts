/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
    color: #e5e5e5;
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

export default GlobalStyles
