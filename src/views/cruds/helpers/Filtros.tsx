export default function Filtros() {
  return (
    <div className="w-full my-2 bg-ortgray-600 rounded-md shadow-md border-[1px] border-ortgray-300">
      <div className="my-[1px] p-2 w-full">
        <div className="flex flex-col justify-between sm:grid sm:grid-cols-2 md:grid-cols-4">
          <div className="w-full flex flex-col p-2 sm:space-x-1">
            <label
              htmlFor="tipoTr"
              className="text-sm uppercase text-white font-bold"
            >
              Folio:
            </label>
            <div className="flex space-x-1">
              <input
                id="tipoTr"
                className="flex-1 bg-white w-1/2 p-1 border-[1px] border-ortgray-950 rounded-md shadow"
                type="text"
              />
              <input
                type="submit"
                className="bg-white flex-1 1/2 p-1 border-[1px] border-ortgray-950  cursor-pointer rounded-md shadow"
              />
            </div>
          </div>
          <div className="w-auto flex flex-col p-2 space-x-1 ">
            <label
              htmlFor="categorias"
              className="text-sm uppercase text-white font-bold"
            >
              Integrador:
            </label>
            <select
              id="categorias"
              className="flex-1 bg-white w-auto px-3 p-1 border-[1px] border-ortgray-950 rounded-md shadow"
            >
              <option value="">- Seleccione -</option>
            </select>
          </div>
          <div className="w-auto flex flex-col p-2 space-x-1 ">
            <label
              htmlFor="estados"
              className="text-sm  uppercase text-white font-bold"
            >
              Concesionario:
            </label>
            <select
              id="estados"
              className="flex-1 bg-white w-auto px-3 p-1 border border-gray-300 rounded-md shadow"
            >
              <option value="">- Seleccione -</option>
            </select>
          </div>
          <div className="w-auto flex flex-col p-2 space-x-1 ">
            <label
              htmlFor="municipios"
              className="text-sm  uppercase text-white font-bold"
            >
              Status:
            </label>
            <select
              id="municipios"
              className="flex-1 bg-white w-auto px-3 p-1 border border-gray-300 rounded-md shadow"
            >
              <option value="">- Seleccione -</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
