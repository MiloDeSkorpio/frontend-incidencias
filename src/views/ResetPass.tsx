import InputEmail from "./cruds/helpers/InputEmail";
import InputSubmit from "./cruds/helpers/InputSubmit";


export default function ResetPass() {
  return (
    <>
    <div className="flex justify-between">
      <h2 className="text-2xl font-extrabold text-ortgray-950">Recupera tu contraseña</h2>
    </div>
    <form
      className="mt-5"
    >

    <InputEmail />
    <InputSubmit />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <a href="/" className="text-white hover:text-gray-800">Inicio de Sesión</a>
    </form>
  </>
  )
}
