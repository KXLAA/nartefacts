import { render } from '@testing-library/react'

import { Palette } from '..'

describe('<Palette />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Palette colors={[]} />)
    const heading = getByRole('heading', { name: /Palette/i })

    expect(heading).toBeInTheDocument()
  })
})
