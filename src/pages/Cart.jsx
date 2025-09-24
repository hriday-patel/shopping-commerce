import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListOfItem from "../components/ListOfItem";
import { clearCart } from "../features/Cart/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const navi = useNavigate();
  const select = useSelector((state) => state.Cart.items);
  const select2 = useSelector((state) => state.Cart.count);
  const select3 = useSelector((state) => state.Cart.total);
  const dispatch = useDispatch();
  const navigate = () => {
    navi("/");
  };

  const clearing = () => {
    const confirmation = window.confirm("Are You Sure You Want To Remove All The Items ?");
    if(!confirmation) return;
    dispatch(clearCart());
    toast.success("You have cleared the cart!")
  }

  return (
    <main className="grow">
      <section className="w-full h-auto relative">
        <div className="container mx-auto relative p-12 flex gap-[10px]">
          <div className="mt-2 w-[200px]">
            <button
              className="px-2 py-1 bg-purple-700/95 text-white shadow-md rounded-md hover:opacity-90 hover:shadow-lg hover:cursor-pointer transition duration-300 linear"
              onClick={navigate}
            >
              Back To Home
            </button>
          </div>
          <div className="flex flex-col gap-[100px] w-full">
            <h1 className="text-4xl font-bold tracking-tight border-b pb-4">
              Your Cart
            </h1>
            <p
              className={`${
                select2 == 0 ? "" : "hidden"
              } text-center text-xl tracking-wide font-semibold leading-normal`}
            >
              Your Cart is Empty Right Now! Please Add Something To View Your
              Cart.
            </p>
            <ul className="list-none flex flex-col gap-[20px]">
              {select.map((item, index) => (
                <ListOfItem item={item} key={index} />
              ))}
            </ul>
            <div className={`${
                select2 == 0 ? "hidden" : "flex"
              } flex-col border-t p-4 gap-[50px]`}>
              <div className="flex justify-between">
                <h2 className="text-2xl tracking-wider font-bold">Total</h2>
                <span className="text-xl font-semibold">$ {select3}</span>
              </div>
              <div className="flex justify-center items-center">
                <button class="relative overflow-hidden px-6 py-2 font-semibold border border-red-600 text-red-600 rounded-md group hover:text-white cursor-pointer" onClick={clearing}>
                  <span class="relative z-10 tracking-[0.2rem]">
                    CLEAR CART
                  </span>

                  <span
                    class="absolute inset-0 bg-red-600 scale-x-0 origin-left 
           transition-transform duration-300 ease-out 
           group-hover:scale-x-100"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Cart;
