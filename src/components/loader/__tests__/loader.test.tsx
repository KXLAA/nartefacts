import { render } from '@testing-library/react'

import { Loader } from '@/components/loader'

describe('<Loader />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Loader />)
    const heading = getByRole('heading', { name: /loader/i })

    expect(heading).toBeInTheDocument()
  })
})
