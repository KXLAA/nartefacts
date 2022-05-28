import { render } from '@testing-library/react'

import { Counter } from '@/components/Counter'

describe('<Counter />', () => {
  it('should render the component with passed props', () => {
    const { getByText } = render(<Counter count={4} />)
    const counter = getByText(/4 gradients generated/i)

    expect(counter).toBeInTheDocument()
  })

  it('should render <Counter /> correctly', () => {
    const { container } = render(<Counter />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
