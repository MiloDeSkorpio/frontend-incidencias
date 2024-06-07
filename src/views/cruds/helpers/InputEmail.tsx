

export default function InputEmail() {
  return (
    <div className="mb-4">
    <label className="text-ortgray-950 font-bold" htmlFor="email">
      Email:
    </label>
    <input
      id="email"
      type="email"
      className="mt-2 block w-full p-3 
      bg-[rgba(220,220,221,0.55)] border-2 border-ortindig-700
      focus:bg-[rgba(173,175,179,0.55)] focus:outline-ortindig-800 focus:shadow-outline 
      focus:placeholder:text-white placeholder: text-ortgray-950 
      backdrop-blur-sm rounded-md"
      placeholder="correo@ort.com.mx"
      name="email"
    />
  </div>
  )
}
