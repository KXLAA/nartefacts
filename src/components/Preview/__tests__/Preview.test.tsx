import { render } from '@testing-library/react'
import { imageUrl, colors } from 'components/utils'
import { Preview } from '..'
import userEvent from '@testing-library/user-event'
//https://stackoverflow.com/questions/56593840/check-that-button-is-disabled-in-react-testing-library

describe('<Preview />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })
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

  it('should render the component correctly', () => {
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
    const toast = getByText(/saved/i)
    expect(toast).toBeInTheDocument()
    expect(saveButton).toBeDisabled()
  })
})
