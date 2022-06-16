import { convert } from '../src'

describe.each<[string, boolean | undefined, string | null]>([
  ['no_this_key', undefined, null],

  ['MetaLeft', undefined, 'Meta'],
  ['ControlLeft', undefined, 'Control'],

  ['MetaLeft', true, 'CommandOrControl'],
  ['ControlLeft', true, 'Control'],

  ['MetaLeft', false, 'Meta'],
  ['ControlLeft', false, 'CommandOrControl'],
])('code: %s macOS: %s', (code, macOS, result) => {
  test('test', () => {
    expect(convert(code, macOS)).toBe(result)
  })
})
