// import { Link } from "react-router-dom";
import Input from "./cruds/helpers/Input";
import InputSubmit from "./cruds/helpers/InputSubmit";
import MiniButton from "./cruds/helpers/MiniButton";
export default function Login() {
  // Types
  const pass = 'password'
  const email = 'email'
  //
  const btnTit = 'Iniciar Sesión'
  const hrefMin = 'pass'
  const miniTit = 'Recupera tu Contraseña'
  // datos input number
  const lblEma = 'Email:'
  const kwEma = 'email'
  const namePhEma = 'pema18@correo.com'
  // datos input pass
  const lblPas = 'Contraseña:'
  const kwPas = 'password'
  const namePhPas = 'Contraseña de ingreso'
    
  return (
    <div className='login mx-auto rounded-md m-3 max-w-2xl h-[75vh] p-5 bg-[rgba(173,175,179,0.65)] backdrop-blur-lg shadow'>
        <h2 className="text-2xl text-center font-extrabold text-ortgray-950">Inicio de Sesión</h2>
        <form className="mt-5 ">
        <Input
        type={email}
        lblName={lblEma}
        hmtlFor={kwEma}
        id={kwEma}
        name={kwEma}
        placeholder={namePhEma}
      />
      <Input
        type={pass}
        lblName={lblPas}
        hmtlFor={kwPas}
        id={kwPas}
        name={kwPas}
        placeholder={namePhPas}
      />
          <InputSubmit value={btnTit}/>
          <MiniButton href={hrefMin} namebtn={miniTit}/>
        </form>
    </div>
  );
}
