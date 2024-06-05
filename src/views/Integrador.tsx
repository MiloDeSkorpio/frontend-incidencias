
import { Link } from "react-router-dom";
export default function Integrador() {
  return (
    <div className="flex justify-between">
      <h2 className="text-4xl font-black text-slate-500">Incidencias</h2>
      <Link 
        to="#"
        className="rounded-ms bg-ortindig-700 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800"
      >
        Tecnicos
      </Link>

    </div>
  )
}
