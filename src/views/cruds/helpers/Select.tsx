

export default function Select() {
  return (
    <div>
              <div className="mb-4">
          <label className="text-ortgray-950 font-bold" htmlFor="typeuser">
            Nivel de Usuario:
          </label>
          <select
            id="typeuser"
            className="mt-2 block w-full p-3 
          bg-[rgba(220,220,221,0.55)] border-2 border-ortindig-700
          focus:bg-[rgba(173,175,179,0.55)] focus:outline-ortindig-800 focus:shadow-outline 
          focus:placeholder:text-white placeholder: text-ortgray-950 
            backdrop-blur-sm rounded-md"
            name="typeuser"
          >
            <option value="">-- Seleccione --</option>
            <option value="1">JUDCV</option>
            <option value="2">Integrador</option>
          </select>
        </div>
    </div>
  )
}
