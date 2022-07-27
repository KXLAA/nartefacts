import { capitalize } from '@/utils'

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const string = 'capitalize'
    const result = capitalize(string)
    // the regular expression /[A-Z]/ will match only for uppercase characters
    expect(result.charAt(0)).toMatch(/[A-Z]/)
  })

  it('should make sure only first letter is uppercase and other letters are lowercase', () => {
    const string = 'capITaliZe'
    const result = capitalize(string)
    // the regular expression /[A-Z]/ will match only for uppercase characters
    expect(result.charAt(0)).toMatch(/[A-Z]/)
    // the regular expression /[a-z]/ will match only for lowercase characters
    expect(result.substring(1)).toMatch(/[a-z]/)
  })
})
