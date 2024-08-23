import input from '../lib/components/input'

export default {
  component: 'demo-your-component'
  // decorators: [(story) => html`${unsafeHTML(input({ type: 'text', name: 'greetings' })())}`]
}

export const Default = {
  render: ({ type, name }) => {
    return input({ type, name })()
  },
  args: {
    type: 'text',
    name: 'greetings'
  }
}
