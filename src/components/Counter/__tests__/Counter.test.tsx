import { render } from '@testing-library/react'

import { Counter } from '@/components/Counter'

describe('<Counter />', () => {
  it('should render the component', () => {
    const { getByText } = render(<Counter />)
    const counter = getByText(/gradients generated/i)

    expect(counter).toBeInTheDocument()
  })

  it('should render the component correctly', () => {
    const { container } = render(<Counter />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
