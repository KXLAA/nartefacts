import {
  colors as testColors,
  getColorNames,
  getColorsForExport,
} from '@/utils'

describe('getColorsForExport', () => {
  it('getColorNames should return an array of objects of {hex: color hex code, name: color name} based on an array of hex code', () => {
    const colors = getColorNames(testColors)
    expect(colors).toEqual([
      { hex: '#095525', name: 'dark-fern' },
      { hex: '#673636', name: 'buccaneer' },
      { hex: '#379273', name: 'ocean-green' },
      { hex: '#136407', name: 'san-felix' },
      { hex: '#573227', name: 'saddle' },
      { hex: '#547820', name: 'fern-frond' },
      { hex: '#163598', name: 'torea-bay' },
      { hex: '#682052', name: 'tawny-port' },
    ])
  })
  it('getColorsForExport should return a CSS string based on an array of hex code', () => {
    const css = getColorsForExport('css', testColors)
    expect(css).toContain(
      `/* CSS Variables */ \n:root {\n--dark-fern: #095525;\n--buccaneer: #673636;\n--ocean-green: #379273;\n--san-felix: #136407;\n--saddle: #573227;\n--fern-frond: #547820;\n--torea-bay: #163598;\n--tawny-port: #682052;\n}`,
    )
  })
})
