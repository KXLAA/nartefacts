import { render, screen } from '@testing-library/react'
import { colors, testColors } from 'styles/global'
const { grayPrimary, blackSecondary } = colors
const { black, white } = testColors
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from 'utils'
import { Button } from '..'
import { ButtonLink } from '..'

describe('<Button />', () => {
  it('should render the button with default values & styles', () => {
    render(<Button />)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyle({
      'background-color': grayPrimary,
      color: blackSecondary,
    })
  })

  it('should render the Button correctly', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
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

  it('Button Link should render as an <a> tag with href attribute', () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: '33' }, pathname: 'kola' })}
      >
        <ButtonLink href="/test" />
      </RouterContext.Provider>,
    )
    expect(screen.getByRole('link', { name: /button/i })).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test')
  })
})
