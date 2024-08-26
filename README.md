# ⏩ HandiJS

HandiJS is a simple Gradio for NodeJS.

For quickly building form-based applications - e.g. for running ML models.

## Installation

`npm i handijs`

## Usage

**Quick example**

```javascript
import {
  title,
  textInput,
  select,
  textarea,
  checkbox,
  range,
  launchApp,
  buildApp,
} from "../index.js"

const ui = [
  title("My example app"),
  textInput({ name: "Name", defaultValue: "" }),
  textInput({ name: "Surname", defaultValue: "" }),
]

const onSubmit = async ({ Name, Surname }) => {
  return `Hi ${Name} ${Surname}`
}

const app = buildApp({ ui, onSubmit, outputType: "image" })

launchApp(app)
```

**More complex example (image generation with OpenAI)**

```javascript
import OpenAI from "openai"

import {
  title,
  textInput,
  select,
  textarea,
  checkbox,
  range,
  launchApp,
  buildApp,
} from "../index.js"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const ui = [
  title("My example app"),
  textInput({ name: "Name", defaultValue: "A peaceful beach at sunset" }),
  select({
    name: "Style",
    options: ["Realistic", "Cartoon", "Abstract", "Vintage", "Futuristic"],
  }),
  textarea({ name: "AdditionalDetails", defaultValue: "Add a small cat" }),
  checkbox({ name: "IncludeCharacters" }),
  range({ name: "Brightness", min: 1, max: 10, defaultValue: 5 }),
]

const onSubmit = async ({
  ImageDescription,
  Style,
  AdditionalDetails,
  IncludeCharacters,
  Brightness,
}) => {
  const prompt = `
    ImageDescription: ${ImageDescription}
    Style: ${Style}
    Brightness: ${Brightness}
    IncludeCharacters: ${IncludeCharacters}
    AdditionalDetails: ${AdditionalDetails} 
  `

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  })

  return response.data[0].url
}

const app = buildApp({ ui, onSubmit, outputType: "image" })

launchApp(app)
```

Result will be:

<img src="docs/handi-js-example.gif" />

## TODO

**v1**

- [ ] define and implement basic elements of a form: all daisyUI input elements
  - [x] text input
  - [x] select
  - [x] slider/range
  - [x] checkbox
  - [ ] file input
  - [ ] radio
  - [x] textarea
  - [ ] toggle
- [ ] change default daisy theme, in case add a theme switcher
- [ ] range: fix missing label
- [ ] add loader
- [x] find a name for the project
- [ ] ensure README.md can be the docs (future web-site)
  - [ ] Description and Value proposition
  - [ ] Installation
  - [ ] Usage/quick example
  - [ ] Documentation of each component? is it needed? probably not since the quick example is enough
- [ ] CI/CD
  - [ ] test
  - [ ] node.js publish on a different account (humanisys)
- [ ] ensure storybook is well implemented
- [ ] try to deliver storybooks website on github
