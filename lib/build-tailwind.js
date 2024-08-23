import tailwind from 'tailwindcss'
import postcss from 'postcss'
import { writeFile, readFile } from 'node:fs/promises'
import ejs from 'ejs'
import log from './log.js'

// export const VIEWS_ROOT_PATH = 'views'
// export const RAW_EJS_FILENAME = 'form.ejs'
// export const RAW_EJS_FILE_FULLPATH = `${VIEWS_ROOT_PATH}/${RAW_EJS_FILENAME}`
// export const BUILT_CSS_FILE = 'css/index.build.css'

export async function buildHtmlFile ({ ejsFile, cssPath, buildCssPath }) {
  const htmlTemplate = await readFile(ejsFile, { encoding: 'utf-8' })
  const ejsTemplate = ejs.compile(htmlTemplate, {})

  const rawFile = ejsTemplate({ cssPath })

  const result = await postcss([
    tailwind({
      // ...config,
      content: [{ raw: rawFile, extension: 'html' }]
    })
  ]).process('@tailwind base;@tailwind components;@tailwind utilities;', {
    from: undefined
  })

  await writeFile(buildCssPath, result.css)

  log.info(`built tailwind CSS to file=${buildCssPath}`)
}
