import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Inicio from './components/layouts/pages/marcas/Inicio'
import Mothercare from './components/layouts/pages/marcas/Mothercare'
import Chevignon from './components/layouts/pages/marcas/Chevignon'
import Nafnaf from './components/layouts/pages/marcas/Nafnaf'
import Americanino from './components/layouts/pages/marcas/Americanino'
import Checkout from './components/layouts/pages/marcas/Checkout'
import Login from './components/layouts/pages/interfaz/Login'

let router = createBrowserRouter([
{
  path:"/",
  element:<Inicio/>
},
{
path: "/Mothercare",
element:<Mothercare/>,
},
{
path: "/Chevignon",
element:<Chevignon/>,
},
{
  path: "/NafNaf",
  element:<Nafnaf/>,
  },
  {
    path: "/Americanino",
    element:<Americanino/>,
  },
  {
    path:"Checkout",
    element:<Checkout/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
function App() {
  return (
   <RouterProvider router={router} />
  )
}
export default App
