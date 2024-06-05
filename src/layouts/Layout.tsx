import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className='bg-[rgba(173,175,179,0.74)] backdrop-blur-sm '>
        <div className='mx-auto max-w-6xl py-5'>
          <h1 className='text-2xl font-extrabold text-ortgray-800'>
            Administrador de Incidencias
          </h1>
        </div>
      </header>
      <main className='mt-10 mx-auto max-w-6xl p-10 bg-ortgray-300 shadow'>
        <Outlet />
      </main>
    </>
  )
}
