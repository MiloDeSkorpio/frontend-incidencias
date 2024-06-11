import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className='bg-white  flex justify-between shadow-md'>
        <div className='max-w-6xl py-2 flex'>
          <img 
          src="/Logo_CDMX.png" 
          alt=""
          className='max-h-10 md:max-h-16' 
          />
          <img 
          src="/Logo_Dependencia.png" 
          alt=""
          className='max-h-10 md:max-h-16' 
          />
        </div>
        <div className='max-w-6xl py-2  mx-1'>
          <img 
          src="/ortpng.png" 
          alt=""
          className='max-h-10 md:max-h-[80px]' 
          />

        </div>
      </header>
      <main className='h-screen mt-3'>
        <Outlet />
      </main>
    </>
  )
}
