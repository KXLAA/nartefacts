import { render, screen } from '@testing-library/react'

import { Table } from '..'

describe('<Table />', () => {
  it('should render the heading', () => {
    render(<Table />)

    expect(screen.getByRole('heading', { name: /Table/i })).toBeInTheDocument()
  })
})
