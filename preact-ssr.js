import { renderToStringAsync } from 'preact-render-to-string'
// import { h, html } from 'preact'
import { html } from 'htm/preact'

const name = 'Preact User!'

function Component ({ name }) {
  return html`<div class='foo'>Hello ${name}</div>`
}
const App = html`<${Component} name='Lorenzo' />`

console.log(await renderToStringAsync(App))
