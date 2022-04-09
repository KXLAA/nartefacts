import { render, screen } from '@testing-library/react'

import { Header } from '..'

describe('<Header />', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render the entire header correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the nav', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render the navigation buttons', () => {
    const { getByText } = render(<Header />)
    expect(getByText(/switch/i)).toBeInTheDocument()
    expect(getByText(/likes/i)).toBeInTheDocument()
    expect(getByText(/create/i)).toBeInTheDocument()
  })
})
