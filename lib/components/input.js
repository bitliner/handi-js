export default function input ({ type, name }) {
  return () => `
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      ${name}
    </label>
    <input 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      type="${type}" 
      placeholder="${name}">
  </div>
  `
}
