import { render } from '@testing-library/react'

import { ColorsTuple, Palette } from '@/components/Palette'
import { colors as testColors } from '@/components/utils'

describe('<Palette />', () => {
  // it('should render the pallette', () => {
  //   const { getByTitle } = render(<Palette colors={testColors} />)
  //   const colors = getByTitle(/palette/i)
  //   expect(colors).toBeInTheDocument()
  // })

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

  it('should render the default color if invalid color is passed', () => {
    const invalidColors: ColorsTuple = Object.assign([], testColors, {
      0: '0955',
    })
    const { getAllByTitle } = render(<Palette colors={invalidColors} />)
    const colors = getAllByTitle(/color/i)
    expect(colors).toHaveLength(testColors.length)
    expect(colors[0]).toHaveStyle(`background: #202020`)
  })
})
