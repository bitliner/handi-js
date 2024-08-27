import tailwind from 'tailwindcss'
import postcss from 'postcss'
import { writeFile, readFile } from 'node:fs/promises'
import ejs from 'ejs'
import log from './log.js'
import tailWindConfig from '../tailwind.config.js'
import path from 'node:path'

export async function buildHtmlFile ({ rootFolder, ejsFile, cssPath, buildCssPath, content, inputNames, outputType }) {
  ejsFile = path.join(rootFolder, `views/${ejsFile}`)
  buildCssPath = path.join(rootFolder, buildCssPath)

  const htmlTemplate = await readFile(ejsFile, { encoding: 'utf-8' })
  const ejsTemplate = ejs.compile(htmlTemplate, {})

  const rawFile = ejsTemplate({ cssPath, content, inputNames, outputType })

  const result = await postcss([
    tailwind({
      ...tailWindConfig,
      content: [{ raw: rawFile, extension: 'html' }]
    })
  ]).process('@tailwind base;@tailwind components;@tailwind utilities;', {
    from: undefined
  })

  await writeFile(buildCssPath, result.css)

  log.info(`built tailwind CSS to file=${buildCssPath}`)
}
