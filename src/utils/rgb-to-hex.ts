//Helper function to covert rgb color codes to HEX color codes

//regEx to check if each string in the array is a valid hex color format
//https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
export const isValidHexCode = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i

export function rgbToHex(arr: [number, number, number]): string {
  return '#' + arr.map((v) => ('0' + v.toString()).slice(-2)).join('')
}
