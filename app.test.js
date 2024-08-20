import test from 'node:test'
import assert from 'node:assert'
import { buildApp } from './app.js'

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1)
})

test('app should work fine', async t => {
  const app = buildApp()

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  const expectedBody = [
    '<!-- index.ejs --->',
    '<!DOCTYPE html>',
    '<html lang="en">',
    '  <head></head>',
    '  <body>',
    '    <p>Hello, User!</p>',
    '  </body>',
    '</html>'
  ].join('\n')

  assert.strictEqual(response.body, expectedBody)
  assert.strictEqual(response.statusCode, 200)
})
