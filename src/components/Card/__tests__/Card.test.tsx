import { render, screen } from '@testing-library/react'

import { Card } from '..'

describe('<Card />', () => {
  it('should render the heading', () => {
    render(<Card />)

    expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument()
  })
})
