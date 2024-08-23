import test from 'node:test'
import assert from 'node:assert'
import input from './components/input.js'
import { strip } from './test-utils.js'

function toHtml (ui) {
  return ui.map(el => el()).join('')
}

test('should work fine', t => {
  const ui = [
    // title({ text: 'demo app' }),
    input({ name: 'greetings', type: 'text' })
  ]

  const html = toHtml(ui)

  assert.strictEqual(strip(html), strip(`
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        greetings
      </label>
      <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" 
        placeholder="greetings">
    </div>`)
  )
})
