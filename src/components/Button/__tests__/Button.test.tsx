import { render } from '@testing-library/react'
import { getColor } from '@/styles/global'
import { Button } from '@/components/Button'

describe('<Button />', () => {
  it('should render the button with default values & styles', () => {
    const { getByRole } = render(<Button />)
    const button = getByRole('button', { name: /Button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': getColor('blackLight'),
      color: getColor('grayLight'),
    })
  })

  it('should render the Button correctly', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button with correct values based on props', () => {
    const { getByRole } = render(
      <Button buttonType="secondary" label="Props" width="full" />,
    )
    const button = getByRole('button', { name: /props/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': getColor('grayLight'),
      color: getColor('blackLight'),
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
