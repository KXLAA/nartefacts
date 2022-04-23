import { render } from '@testing-library/react'
import { colors, testColors } from 'styles/global'
const { grayPrimary, blackSecondary } = colors
const { black, white } = testColors
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from 'utils'
import { Button } from '..'
import { ButtonLink } from '..'

describe('<Button />', () => {
  it('should render the button with default values & styles', () => {
    const { getByRole } = render(<Button />)
    const button = getByRole('button', { name: /Button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
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
    const { getByRole } = render(<Button {...props} />)
    const button = getByRole('button', { name: /Props/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': black,
      color: white,
    })
  })

  it('Button Link should render as an <a> tag with href attribute', () => {
    const { getByRole } = render(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: '33' }, pathname: 'kola' })}
      >
        <ButtonLink href="/test" />
      </RouterContext.Provider>,
    )

    const buttonLink = getByRole('link', { name: /button/i })
    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveAttribute('href', '/test')
  })
})
