import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Preview } from '@/components/preview'
import { colors, imageUrl } from '@/utils'

describe('<Preview />', () => {
  it('should render the component', () => {
    const { getByTestId, getByAltText } = render(
      <Preview colors={colors} imageUrl={imageUrl} />,
    )
    const preview = getByTestId(/preview/i)
    const image = getByAltText('user uploaded image')
    expect(image).toBeInTheDocument()
    expect(image).toBeTruthy()
    expect(preview).toBeInTheDocument()
  })

  it('should render <Preview /> correctly', () => {
    const { container } = render(
      <Preview colors={colors} imageUrl={imageUrl} />,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('clicking the save button should save the image and disable the save button', async () => {
    const user = userEvent.setup()
    const { getByText } = render(
      <Preview colors={colors} imageUrl={imageUrl} />,
    )
    const saveButton = getByText(/save/i)
    expect(saveButton).not.toBeDisabled()

    await user.click(saveButton)
    expect(saveButton).toBeDisabled()
  })
})
