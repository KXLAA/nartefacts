import { render, screen } from '@testing-library/react'
import { colors, testColors } from '../../../styles'
const { grayPrimary, blackSecondary } = colors
const { black, white } = testColors

import Button from '..'

describe('<Button />', () => {
  it('should render the button with default values & styles', () => {
    render(<Button />)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': grayPrimary,
      color: blackSecondary,
    })
  })

  it('should render the button with correct values based on props', () => {
    const props = {
      buttonColor: black,
      text: 'PROPS',
      textColor: white,
    }
    render(<Button {...props} />)

    expect(screen.getByRole('button', { name: /Props/i })).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': black,
      color: white,
    })
  })
})
