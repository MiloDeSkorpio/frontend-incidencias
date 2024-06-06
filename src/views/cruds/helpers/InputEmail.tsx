

export default function InputEmail() {
  return (
    <div className="mb-4">
    <label className="text-ortgray-950 font-bold" htmlFor="email">
      Email:
    </label>
    <input
      id="email"
      type="email"
      className="mt-2 block w-full p-3 bg-gray-100 focus:bg-ortgray-300 focus:outline-ortindig-700 focus:shadow-outline focus:placeholder:text-white placeholder: text-ortgray-700"
      placeholder="correo@ort.com.mx"
      name="email"
    />
  </div>
  )
}
