import InputSubmit from "./helpers/InputSubmit";
import Input from "./helpers/Input";
import Select from "./helpers/Select";

export default function NewUser() {
    // Types
    const text = 'text'
    const pass = 'password'
    const email = 'email'
    const number = 'number'
    // Labels
    const btnTit = 'Registrar Usuario'
    //datos input name
    const lblName = 'Nombre:'
    const kwName = 'nombre'
    const namePh = 'Pedro'
    //datos input apellido
    const lblApe = 'Apellido:'
    const kwApe = 'apellido'
    const namePhAp = 'Mandujano'
    // datos input number
    const lblNum = 'Telefono:'
    const kwNum = 'number'
    const namePhNum = '5550201080'
    // datos input number
    const lblEma = 'Email:'
    const kwEma = 'email'
    const namePhEma = 'pema18@correo.com'
    // datos input pass
    const lblPas = 'Contraseña:'
    const kwPas = 'password'
    const namePhPas = 'Contraseña para ingreso'
    // datos input pass
    const lblPasc = 'Confirma Contraseña:'
    const kwPasc = 'passwordc'
    const namePhPasc = 'Confirma la contraseña'
    // datos input observaciones
  return (
    <div className=" mx-auto rounded-md pt-3 w-[95vw] sm:max-w-6xl h-auto p-5 bg-[rgba(173,175,179,0.65)] backdrop-blur-lg shadow">
      <h2 className="text-sm uppercase text-center text-ortgray-900 font-black">Nuevo Usuario</h2>
      <form className="mt-5">
      <Input
        type ={text}
        lblName={lblName}
        hmtlFor={kwName}
        id={kwName}
        name={kwName}
        placeholder={namePh}
      />
      <Input
        type={text}
        lblName={lblApe}
        hmtlFor={kwApe}
        id={kwApe}
        name={kwApe}
        placeholder={namePhAp}
      />
      <Input
        type={number}
        lblName={lblNum}
        hmtlFor={kwNum}
        id={kwNum}
        name={kwNum}
        placeholder={namePhNum}
      />
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
      <Input
        type={pass}
        lblName={lblPasc}
        hmtlFor={kwPasc}
        id={kwPasc}
        name={kwPasc}
        placeholder={namePhPasc}
      />
      <Select />
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

        <InputSubmit value={btnTit}/>
      </form>
    </div>
  )
}
