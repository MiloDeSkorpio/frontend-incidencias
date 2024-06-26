import { Link } from "react-router-dom";

export default function Incidencias() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Incidencias</h2>
        <Link 
          to="incidencias/nueva"
          className="rounded-ms bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Incidencia
        </Link>
      </div>
    </>
  )
}
