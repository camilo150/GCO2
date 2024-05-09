import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './components/layouts/pages/marcas/Inicio'
import Mothercare from './components/layouts/pages/marcas/Mothercare'
import Chevignon from './components/layouts/pages/marcas/Chevignon'
import Nafnaf from './components/layouts/pages/marcas/Nafnaf'
import Americanino from './components/layouts/pages/marcas/Americanino'
import FiltroAmerocanino from './components/layouts/pages/interfaz/filtros/FiltroAmerocanino'
import FiltroMotherCare from './components/layouts/pages/interfaz/filtros/FiltroMotherCare'
import FiltroNafNaf from './components/layouts/pages/interfaz/filtros/FiltroNafNaf'
import FiltroChevignon from './components/layouts/pages/interfaz/filtros/FiltroChevignon'
import AmericaninoCamisas from './components/layouts/pages/interfaz/filtros/Categories/Americanino/AmericaninoCamisas'
import AmericaninoCamisetas from './components/layouts/pages/interfaz/filtros/Categories/Americanino/AmericaninoCamisetas'
import AmericaninoGorras from './components/layouts/pages/interfaz/filtros/Categories/Americanino/AmericaninoGorras'
import AmericaninoMedias from './components/layouts/pages/interfaz/filtros/Categories/Americanino/AmericaninoMedias'
import MotherCareCoches from './components/layouts/pages/interfaz/filtros/Categories/MotherCare/MotherCareCoches'
import MotherCareCochesDobles from './components/layouts/pages/interfaz/filtros/Categories/MotherCare/MotherCareCochesDobles'
import MotherCareCunas from './components/layouts/pages/interfaz/filtros/Categories/MotherCare/MotherCareCunas'
import MotherCareSillas from './components/layouts/pages/interfaz/filtros/Categories/MotherCare/MotherCareSillas'
import NafNafAbrigos from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafAbrigos'
import NafNafCamisas from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafCamisas'
import NafNafCamisetas from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafCamisetas'
import NafNafEnterizos from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafEnterizos'
import NafNafPantalones from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafPantalones'
import NafNafZapatos from './components/layouts/pages/interfaz/filtros/Categories/NafNaf/NafNafZapatos'
import ChevignonBuzos from './components/layouts/pages/interfaz/filtros/Categories/Chevignon/ChevignonBuzos'
import ChevignonCamisas from './components/layouts/pages/interfaz/filtros/Categories/Chevignon/ChevignonCamisas'
import ChevignonChaquetas from './components/layouts/pages/interfaz/filtros/Categories/Chevignon/ChevignonChaquetas'
import ChevignonPantalones from './components/layouts/pages/interfaz/filtros/Categories/Chevignon/ChevignonPantalones'
import Login from './components/auth/Login'
import Registro from './components/auth/Registro'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registrar-usuario",
    element: <Registro />
  },
  {
    path: "/Home",
    element: <Inicio />
  },
  {
    path: "/Mothercare",
    element: <Mothercare />,
  },
  {
    path: "/Chevignon",
    element: <Chevignon />,
  },
  {
    path: "/NafNaf",
    element: <Nafnaf />,
  },
  {
    path: "/Americanino",
    element: <Americanino />,
  },
  {
    path: "/Filtro-Americanino",
    element: <FiltroAmerocanino />,
  },
  {
    path: "/Filtro-MotherCare",
    element: <FiltroMotherCare />,
  },
  {
    path: "/Filtro-NafNaf",
    element: <FiltroNafNaf />,
  },
  {
    path: "/Filtro-Chevignon",
    element: <FiltroChevignon />,
  },
  {
    path: "Americanino-Camisas",
    element: <AmericaninoCamisas />,
  },
  {
    path: "Americanino-Camisetas",
    element: <AmericaninoCamisetas />,
  },
  {
    path: "Americanino-Gorras",
    element: <AmericaninoGorras />,
  },
  {
    path: "Americanino-Medias",
    element: <AmericaninoMedias />
  },
  {
    path: "Mothercare-Coches",
    element: <MotherCareCoches />
  },
  {
    path: "Mothercare-CochesDobles",
    element: <MotherCareCochesDobles />
  },
  {
    path: "Mothercare-Cunas",
    element: <MotherCareCunas />
  },
  {
    path: "Mothercare-Sillas",
    element: <MotherCareSillas />
  },
  {
    path: "Nafnaf-Abrigos",
    element: <NafNafAbrigos />
  },
  {
    path: "Nafnaf-Camisas",
    element: <NafNafCamisas />
  },
  {
    path: "Nafnaf-Camisetas",
    element: <NafNafCamisetas />
  },
  {
    path: "Nafnaf-Enterizos",
    element: <NafNafEnterizos />
  },
  {
    path: "Nafnaf-Pantalones",
    element: <NafNafPantalones />
  },
  {
    path: "Nafnaf-Zapatos",
    element: <NafNafZapatos />
  },
  {
    path: "Chevignon-Buzos",
    element: <ChevignonBuzos />
  },
  {
    path: "Chevignon-Camisas",
    element: <ChevignonCamisas />
  },
  {
    path: "Chevignon-Chaquetas",
    element: <ChevignonChaquetas />
  },
  {
    path: "Chevignon-Pantalones",
    element: <ChevignonPantalones />
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
