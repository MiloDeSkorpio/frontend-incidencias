import { createBrowserRouter } from 'react-router-dom'
// Layouts
import Layout from './layouts/Layout'
import LayoutLogin from './layouts/LayoutLogin'
// Views
// import Incidencias from './views/Incidencias'
// import NewIncidencia from './views/NewIncidencia'
import Admin from './views/Admin'
import Login from './views/Login'
import Integrador from './views/Integrador'
import Consecionario from './views/Consecionario'
import ResetPass from './views/ResetPass'
import Users from './views/cruds/Users'
import NewUser from './views/cruds/NewUser'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'pass',
        element: <ResetPass />
      }
    ]
  },
  {
    path: 'manager/',
    element: <Layout />,
    children: [
        {
          path: 'panel',
          element: <Admin />
        },
        {
          path: 'usuarios',
          element: <Users />
        },
        {
          path: 'new-user',
          element: <NewUser />
        }
    ]
  },
  {
    path: 'integrador/',
    element: <Layout />,
    children: [
        {
          path: 'cpanel',
          element: <Integrador />
        }

    ]
  },
  {
    path: 'concesionario/',
    element: <Layout />,
    children: [
        {
          path: 'cpanel',
          element: <Consecionario />
        }
    ]
  }
])