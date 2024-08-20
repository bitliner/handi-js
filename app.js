import fastifyView from '@fastify/view'
import fastify from 'fastify'
import ejs from 'ejs'

export function buildApp () {
  const app = fastify()

  app.register(fastifyView, {
    engine: {
      ejs
    },
    root: './views'
  })

  app.get('/', (req, reply) => {
    reply.view('index.ejs', { name: 'User' })
  })

  app.post('/form', (req, reply) => {
    reply.view('form.ejs', { name: 'User' })
  })

  return app
}
