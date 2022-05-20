import { render } from '@testing-library/react'

import { Title } from '@/components/Title'

describe('<Title />', () => {
  it('should render the with default values', () => {
    const { getByText, getByRole } = render(<Title />)
    const heading = getByRole('heading', { name: /title/i })
    const description = getByText(/description/)

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render the entire title correctly', () => {
    const { container } = render(<Title />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the with correctly with given props', () => {
    const { getByText, getByRole } = render(
      <Title title="props" description="property" />,
    )
    const heading = getByRole('heading', { name: /props/i })
    const description = getByText(/property/)

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
