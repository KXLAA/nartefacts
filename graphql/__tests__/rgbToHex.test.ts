import { rgbToHex } from './../resolvers/utils'

it('returns an array of Hex colors', async () => {
  const colors: [red: number, green: number, blue: number][] = [
    [206, 209, 216],
    [33, 37, 38],
    [85, 96, 150],
    [137, 46, 53],
    [78, 79, 79],
    [131, 154, 198],
    [145, 121, 176],
    [142, 151, 142],
  ]
  const result = colors.map((color) => rgbToHex(color))
  expect(result).toBeDefined()
  result.forEach((el) => {
    //regEx to check if each string in the array is a valid hex color format
    //https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
    expect(el).toMatch(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)
  })
})
