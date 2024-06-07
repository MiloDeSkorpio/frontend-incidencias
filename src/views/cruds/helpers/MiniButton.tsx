

const MiniButton = (props: { href: string; namebtn: string  }) => {
  return (
    <div className="m-5">
      <a 
        href={props.href} 
        className=" p-2 rounded-md 
        bg-[rgba(220,220,221,0.55)] backdrop-blur-sm
        border-ortindig-700 border-2
        text-ortgray-900 font-bold 
        hover:bg-ortindig-700 hover:text-white
        "
        >{props.namebtn}</a>
    </div>
  )
}

export default MiniButton
