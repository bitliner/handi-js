import fastifyView from '@fastify/view'
import fastify from 'fastify'
import ejs from 'ejs'
import path from 'node:path'
import { fileURLToPath } from 'url'
import fastifyStatic from '@fastify/static'
import { buildHtmlFile, BUILT_CSS_FILE, RAW_EJS_FILENAME } from './lib/build-tailwind.js'
import log from './lib/log.js'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename)

export function buildApp () {
  const app = fastify()

  app.register(fastifyStatic, {
    root: path.join(__dirname, 'css'),
    prefix: '/css/' // optional: default '/'
  })

  app.register(fastifyView, {
    engine: {
      ejs
    },
    root: './views'
  })

  app.get('/form', async (req, reply) => {
    await buildHtmlFile()

    log.info(`serving ${RAW_EJS_FILENAME} with cssPath=${BUILT_CSS_FILE}`)

    return reply.view(RAW_EJS_FILENAME, { cssPath: BUILT_CSS_FILE })
  })

  app.get('/', (req, reply) => {
    return reply.view('index.ejs', { name: 'User2' })
  })

  return app
}
