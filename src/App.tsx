import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Countries from "./pages/countries/countries";
import SignIn from "./pages/auth/signin";


export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<h1>Não</h1>} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/countries' element={<Countries />} />
    </>
  )

)


const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App;