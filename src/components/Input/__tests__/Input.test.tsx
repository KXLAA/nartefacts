import { render } from '@testing-library/react'
import { Input } from '@/components/Input'

describe('<Input />', () => {
  it('should render the heading', () => {
    const { getByPlaceholderText } = render(<Input placeholder="input" />)
    const inputNode = getByPlaceholderText('input')

    expect(inputNode).toBeInTheDocument()
  })
})
