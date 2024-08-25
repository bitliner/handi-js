export function textInput ({ name, defaultValue = '' }) {
  const func = () => `
   <div class="">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">${name}</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" name="${name}" value="${defaultValue}" />
      </label>
    </div>
  `

  func.inputName = name

  return func
}
