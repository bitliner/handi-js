export function textarea ({ name }) {
  const func = () => `
   <textarea name="${name}" class="textarea textarea-bordered w-full" placeholder="Type here"></textarea>
  `

  func.inputName = name

  return func
}
