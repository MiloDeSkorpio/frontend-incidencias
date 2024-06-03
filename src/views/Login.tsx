import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Inicio de Sesión</h2>
        <Link
          to="incidencias/nueva"
          className="rounded-ms bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Vista JUDCV
        </Link>
      </div>
      <form
        className="mt-10"
      >

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
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-500 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Iniciar Sesion"
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <a href="#" className="text-gray-500 hover:text-gray-800">Recupera tu contraseña</a>
      </form>
    </>
  )
}
