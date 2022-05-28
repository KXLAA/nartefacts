import { render } from '@testing-library/react'

import { Generated } from '@/components/Generated'
import { colors, imageUrl } from '@/components/utils'

describe('<Generated />', () => {
  it('should render the uploaded image based on props', () => {
    const { getByRole } = render(
      <Generated colors={colors} imageUrl={imageUrl} />,
    )
    const image = getByRole('img')

    expect(image).toBeTruthy()
  })

  it('should render <Generated /> correctly', () => {
    const { container } = render(
      <Generated colors={colors} imageUrl={imageUrl} />,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with image placeholder if imageUrl is invalid  ', () => {
    const { getByRole } = render(<Generated colors={colors} imageUrl={''} />)
    const image = getByRole('img')
    expect(image).toBeTruthy()
  })
})
