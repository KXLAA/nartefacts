import { render } from '@testing-library/react'

import { Toast } from '@/components/toast'
import { imageUrl } from '@/utils'

describe('<Toast />', () => {
  it('should render the toast component', () => {
    const { getByAltText } = render(<Toast imageUrl={imageUrl} />)
    const image = getByAltText(
      /image uploaded by a user to generate color palettes/i,
    )
    expect(image).toBeInTheDocument()
    expect(image).toBeTruthy()
  })

  it('should render the component correctly', () => {
    const { container } = render(<Toast imageUrl={imageUrl} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
