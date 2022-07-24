import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '@/components/button'

describe('<Button />', () => {
  it('should render <Button /> correctly with the default styles', () => {
    const { getByRole } = render(<Button label="Button CTA" />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toMatchSnapshot()
    expect(button).toHaveAttribute(
      'class',
      expect.stringContaining('variant-light'),
    )
    expect(button).toHaveAttribute('class', expect.stringContaining('size-lg'))
    expect(button).toHaveAttribute(
      'class',
      expect.stringContaining('fullWidth-true'),
    )
  })

  it('clicking on <Button /> should call onClick prop', () => {
    const handleClick = jest.fn()
    render(<Button label="Click Me" onClick={handleClick} />)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
