import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route element={<Home />} path="/"/>
      <Route element={<Cart />} path="/cart" />
    </Route>
  )) 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
