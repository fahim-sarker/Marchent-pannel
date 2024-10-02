import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider}from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Rootlayout from "./components/Rootlayout";
import Parcel from "./pages/Parcel";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Dasboard/>}></Route>
    <Route path="/parcel" element={<Parcel/>}></Route>
  </Route>
))


function App() {

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App
