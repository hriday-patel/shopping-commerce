import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Outer from "../components/Outer";

const Layout = () => {
  return (
    <>
    <Outer>
        <Header />
        <Outlet />
        <ToastContainer />
    </Outer>
    </>
  )
}
export default Layout