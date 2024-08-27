import { textInput } from '../../lib/components/text-input.js'

export default {
  component: 'demo-your-component'
  // decorators: [(story) => html`${unsafeHTML(input({ type: 'text', name: 'greetings' })())}`]
}

const args = {
  type: 'text',
  name: 'Greetings'
}

export const Default = {
  render: ({ type, name }) => {
    return textInput({ type, name })()
  },
  args,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `textInput({ type: '${args.type}', name: '${args.name}' })`
      }
    }
  }

}
