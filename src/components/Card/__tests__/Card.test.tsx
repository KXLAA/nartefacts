import { render } from '@testing-library/react'
import { imageUrl } from 'components/utils'

import { Card } from '..'

describe('<Card />', () => {
  it('should render card with image', () => {
    const { getByAltText } = render(<Card albumArt={imageUrl} />)
    const image = getByAltText('album art')
    expect(image).toBeInTheDocument()
    expect(image).toBeTruthy()
  })

  it('should render card  correctly', () => {
    const { container } = render(<Card albumArt={imageUrl} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
