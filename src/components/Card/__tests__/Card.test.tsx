import { render } from '@testing-library/react'

import { Card } from '..'

const albumArt =
  'https://ucarecdn.com/c515e4b5-a5bb-44a3-85d0-f139497e0de0/forbrokenearsep_tems.jpeg'

describe('<Card />', () => {
  it('should render card with image', () => {
    const { getByAltText } = render(<Card albumArt={albumArt} />)
    const image = getByAltText('album art')
    expect(image).toBeInTheDocument()
    expect(image).toBeTruthy()
  })

  it('should render card  correctly', () => {
    const { container } = render(<Card albumArt={albumArt} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
