import InputEmail from "./cruds/helpers/InputEmail";
import InputSubmit from "./cruds/helpers/InputSubmit";
import MiniButton from "./cruds/helpers/MiniButton";


export default function ResetPass() {
  const btnTit = 'Enviar Solicitud';
  const hrefMin = '/'
  const miniTit = 'Inicio de Sesión'
  return (
    <>
    <div className="flex justify-between">
      <h2 className="text-2xl font-extrabold text-ortgray-950 text-center">Recupera tu contraseña</h2>
    </div>
    <form
      className="mt-5"
    >

    <InputEmail />
    <InputSubmit  value={btnTit}/>
    <MiniButton href={hrefMin} namebtn={miniTit}/>
    </form>
  </>
  )
}
