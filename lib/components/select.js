export function select ({ name, options }) {
  const func = () => `
   <select name="${name}" class="select select-bordered w-full">
      ${options.map(option => `<option value="${option}">${option}</option>`)}
    </select>
  `

  func.inputName = name

  return func
}
