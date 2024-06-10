import Input from "./cruds/helpers/Input";
import InputSubmit from "./cruds/helpers/InputSubmit";
import MiniButton from "./cruds/helpers/MiniButton";


export default function ResetPass() {
  const btnTit = 'Enviar Solicitud';
  const hrefMin = '/'
  const miniTit = 'Inicio de Sesión'
  // datos input email
  const lblEma = 'Email:'
  const kwEma = 'email'
  const namePhEma = 'pema18@correo.com'
  return (
    <>
    <div className="flex justify-between">
      <h2 className="text-2xl font-extrabold text-ortgray-950 text-center">Recupera tu contraseña</h2>
    </div>
    <form
      className="mt-5"
    >
      <Input
        type={kwEma}
        lblName={lblEma}
        hmtlFor={kwEma}
        id={kwEma}
        name={kwEma}
        placeholder={namePhEma}
      />
    <InputSubmit  value={btnTit}/>
    <MiniButton href={hrefMin} namebtn={miniTit}/>
    </form>
  </>
  )
} 
