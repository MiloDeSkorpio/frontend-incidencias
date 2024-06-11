import { Outlet } from 'react-router-dom'

export default function LayoutLogin() {
  return (
    <>
      <header className='bg-white  flex justify-between shadow-md'>
        <div className='max-w-6xl py-5 flex mx-5'>
          <img 
          src="/Logo_CDMX.png" 
          alt=""
          className='max-h-10 md:max-h-14' 
          />
          <img 
          src="/Logo_Dependencia.png" 
          alt=""
          className='max-h-10 md:max-h-14' 
          />
        </div>
        <div className='max-w-6xl py-5  mx-5'>
          <img 
          src="/ortpng.png" 
          alt=""
          className='max-h-10 md:max-h-14' 
          />

        </div>
      </header>

      <main >
        <Outlet />
      </main>
           
    </>
  )
}
