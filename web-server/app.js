import fastifyView from '@fastify/view'
import fastify from 'fastify'
import ejs from 'ejs'
import path from 'node:path'
import { fileURLToPath } from 'url'
import fastifyStatic from '@fastify/static'
import { buildHtmlFile } from '../lib/build-tailwind.js'
import log from '../lib/log.js'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename)

export function buildApp ({ onSubmit, ui = [], outputType = 'text' } = {}) {
  const app = fastify()

  app.register(fastifyStatic, {
    root: path.join(__dirname, '../css'),
    prefix: '/css/'
  })
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../js'),
    prefix: '/js/',
    decorateReply: false
  })

  app.register(fastifyView, {
    engine: {
      ejs
    },
    root: './views'
  })

  app.get('/form', async (req, reply) => {
    const ejsPath = 'form.ejs'
    const cssPath = 'css/index.css'
    const buildCssPath = 'css/index.build.css'

    await buildHtmlFile({ ejsFile: `views/${ejsPath}`, cssPath, buildCssPath })

    return reply.view(ejsPath, { cssPath: buildCssPath })
  })

  app.post('/submit', async (req, reply) => {
    console.log(req.body.params, req.body.inputNames)

    if (onSubmit) {
      const res = await onSubmit(req.body.params)
      reply.send(res)
    }

    reply.send('ERROR: onSubmit callback was not provided')
  })

  app.get('/static-demo', async (req, reply) => {
    const ejsPath = 'static-demo.ejs'
    const cssPath = 'css/static-demo.css'
    const buildCssPath = 'css/static-demo.build.css'

    const content = ui
      .map(el => el())
      .join('')

    const inputNames = JSON.stringify(ui.filter(el => el.inputName).map(el => el.inputName))

    await buildHtmlFile({ ejsFile: `views/${ejsPath}`, cssPath, buildCssPath, content, inputNames, outputType })

    return reply.view(ejsPath, { cssPath: buildCssPath, content, inputNames, outputType })
  })

  app.get('/', (req, reply) => {
    return reply.view('index.ejs', { name: 'User' })
  })

  return app
}
