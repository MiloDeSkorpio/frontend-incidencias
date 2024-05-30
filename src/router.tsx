import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Incidencias from './views/Incidencias'
import NewIncidencia from './views/NewIncidencia'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Incidencias />
      },
      {
        path: 'incidencias/nueva',
        element: <NewIncidencia />
      }
    ]
  }
])