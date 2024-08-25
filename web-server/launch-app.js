import log from '../lib/log.js'

export async function launchApp (app, { port = 3000 } = {}) {
  app.listen({ port }, (err, address) => {
    if (err) {
      log.error(err)
      process.exit(1)
    }
    console.log(`listening on ${address}`)
  })
}
