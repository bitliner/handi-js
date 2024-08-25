export function range ({ name, min = 0, max = 100, defaultValue = 0 } = {}) {
  const func = () => `
   <input 
    name="${name}" 
    type="range" 
    min="${min}" 
    max="${max}" 
    value="${defaultValue}" 
    class="range"
   />
  `

  func.inputName = name

  return func
}
