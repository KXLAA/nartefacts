import { render } from '@testing-library/react'
import { colors } from 'styles/global'
const { grayPrimary, blackSecondary } = colors
import { Button } from '..'

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
    const { getByRole } = render(
      <Button buttonType="secondary" text="Props" fullWidth />,
    )
    const button = getByRole('button', { name: /props/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': blackSecondary,
      color: grayPrimary,
      'max-width': '100%',
    })
  })

  it('Button Link should render as an <a> tag with href attribute', () => {
    const { getByRole } = render(
      <Button buttonType="link-primary" href="/test" />,
    )

    const buttonLink = getByRole('link', { name: /button/i })
    expect(buttonLink).toBeInTheDocument()
    expect(buttonLink).toHaveAttribute('href', '/test')
  })
})
