import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Header = () => {
        console.log(import.meta.env.VITE_WOW_KEY);
        const navigate = useNavigate();
        const {count } = useSelector((state) => state.Cart);

    const cart = () => {
        navigate('/cart')
    }
  return (
    <header className="sticky top-0 z-50 w-full h-auto">
        <div className="px-6 py-2 bg-purple-700/90 backdrop-blur-xs">
          <div className="container mx-auto flex justify-between items-center gap-[10px]">
            <div className="flex gap-[20px] justify-center items-center">
              <img
                src="/logo.jpg"
                alt="Company Logo"
                width="40px"
                height="40px"
              />
              <h1 className="text-3xl font-bold tracking-tighter">
                EStore Co.
              </h1>
            </div>
            <nav>
              <div className="flex justify-center items-center gap-[20px] mt-3">
                <a href="#" className="font-bold text-gray-800 tracking-wide">
                  About us
                </a>
                <a href="#" className="font-bold text-gray-800 tracking-wide">
                  Contact us
                </a>
                <a href="#" className="font-bold text-gray-800 tracking-wide">
                  Our Products
                </a>
                <a href="#" className="font-bold text-gray-800 tracking-wide">
                  Home
                </a>
              </div>
            </nav>
            <div className="flex justify-center items-center gap-[10px] mt-2">
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center cursor-pointer" onClick={cart}>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  <div className="bg-slate-300/45 w-[20px] h-[20px] absolute rounded-[50%] flex justify-center items-center backdrop-blur-3xl -top-2 -right-2">
                    {count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
export default Header