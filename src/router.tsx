import { createBrowserRouter } from 'react-router-dom'
// Layouts
// import Layout from './layouts/Layout'
import LayoutLogin from './layouts/LayoutLogin'
// Views
// import Incidencias from './views/Incidencias'
// import NewIncidencia from './views/NewIncidencia'
import Login from './views/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <Login />
      }
      // {
      //   path: 'incidencias/nueva',
      //   element: <NewIncidencia />
      // }
    ]
  },
  // {
  //   // path: 'supervisor',
  //   // element: <Layout />,
  //   // children: [
  //   //   {
  //   //     index: true,
  //   //     element: <Incidencias />
  //   //   },
  //   //   {
  //   //     path: 'incidencias/nueva',
  //   //     element: <NewIncidencia />
  //   //   }
  //   ]
  // }
])