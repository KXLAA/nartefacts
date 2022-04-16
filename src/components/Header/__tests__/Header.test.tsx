import { render, screen, fireEvent } from '@testing-library/react'
import { createMockRouter } from 'utils'
import { RouterContext } from 'next/dist/shared/lib/router-context'

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
    expect(getByText(/info/i)).toBeInTheDocument()
    expect(getByText(/likes/i)).toBeInTheDocument()
    expect(getByText(/create/i)).toBeInTheDocument()
  })

  it('has navigation button links with the correct href attributes', () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: '33' }, pathname: 'kola' })}
      >
        <Header />
      </RouterContext.Provider>,
    )

    // /info
    expect(screen.getByText(/info/i)).toHaveAttribute('href', '/info')
    // /likes
    expect(screen.getByText(/likes/i)).toHaveAttribute('href', '/likes')
    // /likes
    expect(screen.getByText(/create/i)).toHaveAttribute('href', '/create')
  })

  it('has navigation buttons that work', () => {
    const router = createMockRouter({
      query: { id: '33' },
      pathname: 'kola',
    })

    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    )

    fireEvent.click(screen.getByRole('link', { name: /info/i }))
    expect(router.push).toHaveBeenCalledWith('/info', '/info', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })
})
