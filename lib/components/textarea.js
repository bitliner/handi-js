export function textarea ({ name, defaultValue = '' } = {}) {
  const func = () => `
   <textarea name="${name}" class="textarea textarea-bordered w-full" placeholder="Type here">${defaultValue}</textarea>
  `

  func.inputName = name

  return func
}
