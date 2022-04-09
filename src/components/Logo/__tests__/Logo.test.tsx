import { render, screen } from '@testing-library/react'

import { Logo } from '..'

describe('<Logo />', () => {
  it('should render the logo', () => {
    render(<Logo />)
    expect(screen.getByTitle('Logo')).toBeInTheDocument()
  })

  it('should render Logo correctly', () => {
    const { container } = render(<Logo />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
