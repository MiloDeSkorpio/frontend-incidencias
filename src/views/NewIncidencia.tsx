
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
    </>
  )
}
