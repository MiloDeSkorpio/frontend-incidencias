
import { Link } from "react-router-dom"
export default function NewIncidencia() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Registrar Incidencias</h2>
        <Link 
          to="/"
          className="rounded-ms bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
        Incidencias
        </Link>
      </div>
      <form
    className="mt-10"      
>
 
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="autobus"
        >Autobus:</label>
        <select 
            id="autobus"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="autobus"
        >
          <option value="">-- Seleccione --</option>
          <option value="1">1</option>
        </select>
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="falla"
        >Tipo de Falla:</label>
        <select 
            id="falla"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="falla"
        >
          <option value="">-- Seleccione --</option>
          <option value="1">Falla en validador</option>
        </select>
    </div>
    <div className="mb-4">
        <label
            className="text-gray-800"
            htmlFor="observaciones"
        >Observaciones:</label>
        <input 
            id="observaciones"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Detalles de la Falla. ej. El Validador no muestra nada..."
            name="observaciones"
        />
    </div>
    <input
      type="submit"
      className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
      value="Registrar Incidencia"
    />
</form>
    </>
  )
}
