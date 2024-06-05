import { Link } from "react-router-dom";

export default function Consecionario() {
  return (
    <div className="flex justify-between">
      <h2 className="text-4xl font-black text-ortgray-800">Incidencias</h2>
      <Link 
        to="#"
        className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-ortgray-900 shadow-sm hover:bg-ortindig-800 hover:text-white"
      >
        Supervisores
      </Link>
    </div>
  )
}
