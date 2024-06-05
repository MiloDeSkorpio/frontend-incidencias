import { Outlet } from 'react-router-dom'

export default function LayoutLogin() {
  return (
    <>
      <header className='bg-white '>
        <div className='max-w-6xl py-5 flex mx-5'>
          <img 
          src="/Logo_CDMX.png" 
          alt=""
          className='max-h-10' 
          />
          <img 
          src="/Logo_Dependencia.png" 
          alt=""
          className='max-h-10' 
          />
        </div>
      </header>

      <main className='login rounded-md m-3 max-w-2xl h-screen max-h-[80vh] p-5 bg-[rgba(173,175,179,0.65)] backdrop-blur-lg shadow'>
        <Outlet />
      </main>
           

    </>
  )
}
