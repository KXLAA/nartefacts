import { render } from '@testing-library/react'

import { Title } from '@/components/title'

describe('<Title />', () => {
  it('should render the with default values', () => {
    const { getByText } = render(<Title />)
    const description = getByText(/description/)
    expect(description).toBeInTheDocument()
  })

  it('should render <Title /> correctly', () => {
    const { container } = render(<Title />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the with correctly with given props', () => {
    const { getByText } = render(<Title text="property" />)
    const description = getByText(/property/)
    expect(description).toBeInTheDocument()
  })
})
