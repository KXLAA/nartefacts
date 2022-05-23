import { render } from '@testing-library/react'

import { Generated } from '@/components/Generated'
import { colors, imageUrl } from '@/components/utils'

describe('<Generated />', () => {
  it('should render the heading', () => {
    const { getByAltText } = render(
      <Generated colors={colors} imageUrl={imageUrl} />,
    )
    const image = getByAltText('user uploaded image')

    expect(image).toBeTruthy()
  })
})
