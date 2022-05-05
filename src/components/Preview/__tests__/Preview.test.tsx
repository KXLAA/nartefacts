import { render } from '@testing-library/react'
import { imageUrl, colors } from 'components/utils'
import { Preview } from '..'

describe('<Preview />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <Preview colors={colors} imageUrl={imageUrl} />,
    )
    const preview = getByTestId(/preview/i)

    expect(preview).toBeInTheDocument()
  })

  it('should render the component correctly', () => {
    const { container } = render(
      <Preview colors={colors} imageUrl={imageUrl} />,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
