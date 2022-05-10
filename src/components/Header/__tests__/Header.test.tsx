import { render, fireEvent } from '@testing-library/react'
import { createMockRouter } from 'utils'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { Header } from '..'

describe('<Header />', () => {
  it('should render the header based on props', () => {
    const { getByRole } = render(<Header primary />)
    const header = getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('should render the entire header correctly', () => {
    const { container } = render(<Header primary />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the nav', () => {
    const { getByRole } = render(<Header primary />)
    const navigation = getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('should render the navigation buttons', () => {
    const { getByText } = render(<Header primary />)
    const infoLink = getByText(/info/i)
    const likesLink = getByText(/likes/i)
    const createLink = getByText(/create/i)

    expect(infoLink).toBeInTheDocument()
    expect(likesLink).toBeInTheDocument()
    expect(createLink).toBeInTheDocument()
  })

  it('has navigation button links with the correct href attributes', () => {
    const { getByText } = render(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: '33' }, pathname: 'kola' })}
      >
        <Header primary />
      </RouterContext.Provider>,
    )

    const infoLink = getByText(/info/i)
    const likesLink = getByText(/likes/i)
    const createLink = getByText(/create/i)

    expect(infoLink).toHaveAttribute('href', '/info')
    expect(likesLink).toHaveAttribute('href', '/likes')
    expect(createLink).toHaveAttribute('href', '/create')
  })

  it('has navigation buttons that work', () => {
    const router = createMockRouter({
      query: { id: '33' },
      pathname: 'kola',
    })

    const { getByRole } = render(
      <RouterContext.Provider value={router}>
        <Header primary />
      </RouterContext.Provider>,
    )

    const infoLink = getByRole('link', { name: /info/i })

    fireEvent.click(infoLink)
    expect(router.push).toHaveBeenCalledWith('/info', '/info', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })
})
