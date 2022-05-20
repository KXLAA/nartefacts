import { render } from '@testing-library/react'

import { Logo } from '@/components/Logo'

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { getByTitle } = render(<Logo />)
    const logo = getByTitle(/logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render Logo correctly', () => {
    const { container } = render(<Logo />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
