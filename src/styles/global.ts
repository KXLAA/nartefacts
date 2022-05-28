/* istanbul ignore file */

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
    solid: {
      sm: '1px solid',
      base: '2px solid',
      md: '4px solid',
      lg: '8px solid',
    },
    dashed: {
      sm: '1px dashed',
      base: '2px solid',
      md: '4px dashed',
      lg: '8px dashed',
    },
  },
}
//Getter functions & Types
export type Size = keyof typeof theme.size
export type FontSize = keyof typeof theme.text
export const getFontSize = (fontSize: FontSize) => theme.text[fontSize]
export const getSize = (size: Size) => theme.size[size]

export const getBorder = (
  size: 'base' | Extract<Size, 'sm' | 'md' | 'lg'> = 'md',
  style: 'solid' | 'dashed' = 'solid',
  color: keyof typeof theme.colors = 'grayLight',
) => {
  return `${theme.borders[style][size]} ${theme.colors[color]}`
}

export const getColor = (color: keyof typeof theme.colors) =>
  theme.colors[color]
