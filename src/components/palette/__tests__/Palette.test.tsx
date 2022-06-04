import { render } from '@testing-library/react'

import { ColorsTuple, Palette } from '@/components/palette'
import { colors as testColors } from '@/components/utils'

describe('<Palette />', () => {
  it('should render the <Palette /> correctly', () => {
    const { container } = render(<Palette colors={testColors} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pallette with correct color props', () => {
    const { getAllByTestId } = render(<Palette colors={testColors} />)
    const colors = getAllByTestId('color-box')
    expect(colors).toHaveLength(testColors.length)

    // colors.forEach((color, index) => {
    //   expect(color).toHaveStyle(`background: ${testColors[index]}`)
    // })
  })

  it('should render the default color if invalid color is passed', () => {
    const invalidColors: ColorsTuple = Object.assign([], testColors, {
      0: '0955',
    })
    const { getAllByTestId } = render(<Palette colors={invalidColors} />)
    const colors = getAllByTestId('color-box')
    expect(colors).toHaveLength(testColors.length)
  })
})
