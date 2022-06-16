# bk2ea

An util function for converting [keycode in the browser](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values) to [Accelerator in Electron](https://www.electronjs.org/docs/latest/api/accelerator).

## Usage

First, install it:

```bash
npm i @hcfy/bk2ea
```

Then:

```js
import { convert } from '@hcfy/bk2ea'

document.addEventListener('keydown', (e) => {
  const a = convert(e.code)
  if (a) {
    console.log('Electron Accelerator', a)
  } else {
    console.log("Electron doesn't support this key:", e.code)
  }
})
```

### A note for `CommandOrControl`

```js
// If the second parameter is not passed
convert('MetaLeft') === 'Meta'
convert('ControlLeft') === 'Control'

const macOS = navigator.userAgent.includes('Mac')

// If you press these two keys in macOS
macOS === true
convert('MetaLeft', macOS) === 'CommandOrControl'
convert('ControlLeft', macOS) === 'Control'

// If you press these two keys in Windows or Linux
macOS === false
convert('MetaLeft', macOS) === 'Meta'
convert('ControlLeft', macOS) === 'CommandOrControl'
```
