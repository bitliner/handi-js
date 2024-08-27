export function range ({ name, min = 0, max = 100, defaultValue = 0 } = {}) {
  const func = () => `
  <div class="flex flex-row gap-x-7 items-center">
    <div class="label">
      <span class="label-text">${name}</span>
    </div>
    <input 
      name="${name}" 
      type="range" 
      min="${min}" 
      max="${max}" 
      value="${defaultValue}" 
      class="range"
    />
  </div>
  
  `

  func.inputName = name

  return func
}
