import test from 'node:test'
import assert from 'node:assert'
import { textInput } from './text-input.js'
import { strip } from '../test-utils.js'

test('should work fine', t => {
  const inputFn = textInput({ name: 'greetings' })

  assert.strictEqual(strip(inputFn()), strip(`
    <div class="">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">greetings</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" name="greetings" value="" />
      </label>
    </div>`)
  )
})
