import { KeyCode2AcceleratorMap } from './map'

export function convert(code: string, macOS?: boolean) {
  const result = KeyCode2AcceleratorMap[code]
  if (!result) return null

  if (macOS != null) {
    if (macOS) {
      if (result === 'Meta') {
        return 'CommandOrControl'
      }
    } else {
      if (result === 'Control') {
        return 'CommandOrControl'
      }
    }
  }

  return result
}
