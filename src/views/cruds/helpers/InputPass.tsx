

export default function InputPass() {
  return (
    <div className="mb-4">
    <label className="text-ortgray-950 font-bold" htmlFor="password">
      Password:
    </label>
    <input
      id="password"
      type="password"
      className="mt-2 block w-full p-3 bg-gray-100 focus:bg-ortgray-300 focus:outline-ortindig-700 focus:shadow-outline focus:placeholder:text-white placeholder: text-ortgray-700"
      placeholder="Password Plataforma de Incidencias"
      name="password"
    />
  </div>
  )
}
