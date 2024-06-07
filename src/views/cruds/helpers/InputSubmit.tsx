
const InputSubmit = (props: { value: string | number | readonly string[] | undefined }) => {
  return (
    <div>
    <input
      type="submit"
      className="mt-4 p-2 w-full 
      bg-[rgba(220,220,221,0.55)] backdrop-blur-sm
      border-ortindig-700 border-2
      text-ortgray-900 font-bold 
      hover:bg-ortindig-700 hover:text-white
      text-lg cursor-pointer rounded"
      value={props.value}
    />
  </div>
  )
}

export default InputSubmit