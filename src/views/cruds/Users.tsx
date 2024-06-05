import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-ortgray-800 ">
          Registrar Nuevo Usuario
        </h2>
        <Link
          to="/"
          className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-ortgray-900 shadow-sm hover:bg-ortindig-800 hover:text-white"
        >
          Lista de Usuarios
        </Link>
      </div>
      <form className="mt-10">
      <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="nombre"
          >Nombre:</label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Pedro"
            name="nombre"
          />
        </div>
      <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="apellido"
          >Apellido:</label>
          <input
            id="apellido"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Ramirez"
            name="apellido"
          />
        </div>
      <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="number"
          >Telefono:</label>
          <input
            id="number"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="5550201080"
            name="number"
          />
        </div>
      <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="email"
          >Email:</label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="correo@ort.com.mx"
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="password"
          >Password:</label>
          <input
            id="password"
            type="password"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Password Plataforma de Incidencias"
            name="password"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="typeuser">
            Nivel de Usuario:
          </label>
          <select
            id="typeuser"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="typeuser"
          >
            <option value="">-- Seleccione --</option>
            <option value="1">JUDCV</option>
            <option value="2">Integrador</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="organismo">
            Organismo:
          </label>
          <select
            id="organismo"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="organismo"
          >
            <option value="">-- Seleccione --</option>
            <option value="1">ORT</option>
            <option value="1">BEA</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="observaciones">
            Observaciones:
          </label>
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
          className="mt-5 w-full bg-ortindig-700 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Usuario"
        />
      </form>
    </>
  );
}
