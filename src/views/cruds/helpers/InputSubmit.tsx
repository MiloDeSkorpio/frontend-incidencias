
const InputSubmit = (props) => {
  return (
    <div>
    <input
      type="submit"
      className="mt-5 w-full bg-ortindig-800 hover:border-white hover:border-2 p-2  text-white font-bold text-lg cursor-pointer rounded hover:shadow-xl"
      value={props.value}
    />
  </div>
  )
}

export default InputSubmit