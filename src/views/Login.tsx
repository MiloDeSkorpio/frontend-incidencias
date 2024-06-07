// import { Link } from "react-router-dom";
import InputEmail from "./cruds/helpers/InputEmail";
import InputPass from "./cruds/helpers/InputPass";
import InputSubmit from "./cruds/helpers/InputSubmit";
import MiniButton from "./cruds/helpers/MiniButton";
export default function Login() {
  const btnTit = 'Iniciar Sesión'
  const hrefMin = 'pass'
  const miniTit = 'Recupera tu Contraseña'
  return (
    <>
        <h2 className="text-2xl text-center font-extrabold text-ortgray-950">Inicio de Sesión</h2>
        <form className="mt-5 ">
          <InputEmail />
          <InputPass />
          <InputSubmit value={btnTit}/>
          <MiniButton href={hrefMin} namebtn={miniTit}/>
        </form>
    </>
  );
}
