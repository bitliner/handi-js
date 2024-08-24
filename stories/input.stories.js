import input from '../lib/components/input'

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
    return input({ type, name })()
  },
  args,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `input({ type: '${args.type}', name: '${args.name}' })`
      }
    }
  }

}
