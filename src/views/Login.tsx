// import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
        <h2 className="text-2xl text-center font-extrabold text-ortgray-950">Inicio de Sesión</h2>
        {/* <Link
          to="manager/cpanel"
          className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800 hover:text-white"
        >
          Vista JUDCV
        </Link>
        <Link
          to="integrador/cpanel"
         className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800 hover:text-white"
        >
          Vista Integrador
        </Link>
        <Link
          to="concesionario/cpanel"
          className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800 hover:text-white"
        >
          Vista Consecionario
        </Link> */}
        <form className="mt-5 ">
          <div className="mb-4">
            <label className="text-ortgray-950 font-bold" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 block w-full p-3 bg-gray-100 focus:bg-ortgray-300 focus:outline-ortindig-700 focus:shadow-outline focus:placeholder:text-white placeholder: text-ortgray-700"
              placeholder="correo@ort.com.mx"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="text-ortgray-950 font-bold" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 block w-full p-3 bg-gray-100 focus:bg-ortgray-300 focus:outline-ortindig-700 focus:shadow-outline focus:placeholder:text-white placeholder: text-ortgray-700"
              placeholder="Password Plataforma de Incidencias"
              name="password"
            />
          </div>
          <input
            type="submit"
            className="mt-5 w-full bg-ortindig-800 hover:border-white hover:border-2 p-2  text-white font-bold text-lg cursor-pointer rounded hover:shadow-xl"
            value="Iniciar Sesion"
          />
          <hr className="h-px my-10 bg-ortgray-300 border-0 " />
          <a href="pass" className="text-white hover:text-gray-800">
            Recupera tu contraseña
          </a>
        </form>
    </>
  );
}
