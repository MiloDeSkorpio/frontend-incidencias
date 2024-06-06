// import { Link } from "react-router-dom";
import InputEmail from "./cruds/helpers/InputEmail";
import InputPass from "./cruds/helpers/InputPass";
import InputSubmit from "./cruds/helpers/InputSubmit";
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
          <InputEmail />
          <InputPass />
          <InputSubmit value='Iniciar Sesión'/>
          <hr className="h-px my-10 bg-ortgray-300 border-0 " />
          <a href="pass" className="text-white hover:text-gray-800">
            Recupera tu contraseña
          </a>
        </form>
    </>
  );
}
