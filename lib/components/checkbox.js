export function checkbox ({ name }) {
  const func = () => `
   <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">${name}</span>
        <input type="checkbox" checked="checked" class="checkbox" name="${name}" />
      </label>
    </div>
  `

  func.inputName = name

  return func
}
