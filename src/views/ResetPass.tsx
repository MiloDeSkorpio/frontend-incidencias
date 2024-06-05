

export default function ResetPass() {
  return (
    <>
    <div className="flex justify-between">
      <h2 className="text-4xl font-black text-ortgray-500">Recupera tu contraseña</h2>
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
      <input
        type="submit"
        className="mt-5 w-full bg-ortindig-700 p-2 text-white font-bold text-lg cursor-pointer rounded"
        value="Iniciar Sesion"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <a href="/" className="text-gray-500 hover:text-gray-800">Inicio de Sesión</a>
    </form>
  </>
  )
}
