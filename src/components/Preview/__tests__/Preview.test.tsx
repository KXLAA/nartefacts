import { render } from '@testing-library/react'
import { testColors } from 'components/Palette/__tests__/Palette.test'

import { Preview } from '..'

export const testImageUrl =
  'https://nartefact-upload.s3.eu-west-2.amazonaws.com/next-s3-uploads/fae5d6ed-1298-412a-b0ce-edac6c043f29/Colour.jpg'
describe('<Preview />', () => {
  it('should render the component', () => {
    const { getByTitle } = render(
      <Preview colors={testColors} imageUrl={testImageUrl} />,
    )
    const preview = getByTitle(/preview/i)

    expect(preview).toBeInTheDocument()
  })

  it('should render the component correctly', () => {
    const { container } = render(
      <Preview colors={testColors} imageUrl={testImageUrl} />,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
