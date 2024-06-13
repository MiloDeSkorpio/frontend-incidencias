import { registros } from "../../../data"

export default function Card() {
  const { incidencias } = registros
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {incidencias.map((incidencia) => (
          <li key={incidencia.id}>
            <div className="sm:w-1/6 md:w-3/6 lg:w-4/6 space-y-3">
              <a
                className="block text-2xl font-extrabold text-dkblue-600 truncate"
                href={`/incidencia/${incidencia.id}`}
              >
                {incidencia.idBus}
              </a>
              <p className="text-sm text-black font-bold">
                {incidencia.idFalla}
              </p>
              <p className="text-sm text-gray-500 font-bold flex items-center">
                {incidencia.detalles}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}
