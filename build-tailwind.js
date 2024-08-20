import tailwind from 'tailwindcss'
import postcss from 'postcss'

const html = '<div class="bg-red-300"></div>'

const result = await postcss([
  tailwind({
    // ...config,
    content: [{ raw: html, extension: 'html' }]
  })
]).process('@tailwind base;@tailwind components;@tailwind utilities;', {
  from: undefined
})
console.log(result)
console.log(Object.keys(result))
