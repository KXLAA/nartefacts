import { render } from '@testing-library/react'

import { Card } from '@/components/card'
import { mockAlbum } from '@/components/utils'

describe('<Card />', () => {
  it('should render card with image', () => {
    const { getByAltText } = render(<Card {...mockAlbum} />)
    const image = getByAltText('album art')
    expect(image).toBeInTheDocument()
    expect(image).toBeTruthy()
  })

  it('should render <Card /> correctly', () => {
    const { container } = render(<Card {...mockAlbum} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
