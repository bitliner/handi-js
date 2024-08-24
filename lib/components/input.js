export default function input ({ type, name }) {
  const func = () => `
   <div class="">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">${name}</span>
        </div>
        <input type="${type}" placeholder="Type here" class="input input-bordered w-full" name="${name}" />
      </label>
    </div>
  `

  func.inputName = name

  return func
}
