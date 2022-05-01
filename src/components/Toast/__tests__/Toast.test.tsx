import { render } from '@testing-library/react'

import { Toast } from '..'

describe('<Toast />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Toast />)
    const heading = getByRole('heading', { name: /Toast/i })

    expect(heading).toBeInTheDocument()
  })
})
