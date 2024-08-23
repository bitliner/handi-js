import test from 'node:test'
import assert from 'node:assert'
import input from './input.js'
import { strip } from '../test-utils.js'

test('should work fine', t => {
  const inputFn = input({ name: 'greetings', type: 'text' })

  assert.strictEqual(strip(inputFn()), strip(`
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
