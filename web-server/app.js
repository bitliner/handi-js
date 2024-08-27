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
    root: path.join(__dirname, '../public/css'),
    prefix: '/public/css/'
  })

  app.register(fastifyView, {
    engine: {
      ejs
    },
    root: './views'
  })

  app.post('/submit', async (req, reply) => {
    console.log(req.body.params, req.body.inputNames)

    if (onSubmit) {
      const res = await onSubmit(req.body.params)
      reply.send(res)
    }

    reply.send('ERROR: onSubmit callback was not provided')
  })

  app.get('/', async (req, reply) => {
    const ejsPath = 'static-demo.ejs'
    const cssPath = 'public/css/static-demo.css'
    const buildCssPath = 'public/css/static-demo.build.css'

    const content = ui
      .map(el => el())
      .join('')

    const inputNames = JSON.stringify(ui.filter(el => el.inputName).map(el => el.inputName))

    await buildHtmlFile({ ejsFile: `views/${ejsPath}`, cssPath, buildCssPath, content, inputNames, outputType })

    return reply.view(ejsPath, { cssPath: buildCssPath, content, inputNames, outputType })
  })

  return app
}
