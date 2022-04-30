import { render } from '@testing-library/react'
import { colorsTuple } from 'components/Palette'

import { Palette } from '..'

const testColors: colorsTuple = [
  '#095525',
  '#673636',
  '#379273',
  '#136407',
  '#573227',
  '#547820',
  '#163598',
  '#682052',
]

describe('<Palette />', () => {
  it('should render the pallette', () => {
    const { getByTitle } = render(<Palette colors={testColors} />)
    const colors = getByTitle(/palette/i)
    expect(colors).toBeInTheDocument()
  })

  it('should render the pallette correctly', () => {
    const { container } = render(<Palette colors={testColors} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pallette with correct color props', () => {
    const { getAllByTitle } = render(<Palette colors={testColors} />)
    const colors = getAllByTitle(/color/i)
    expect(colors).toHaveLength(testColors.length)

    colors.forEach((color, index) => {
      expect(color).toHaveStyle(`background: ${testColors[index]}`)
    })
  })
})
