import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addMore, addToCart } from "../features/Cart/cartSlice";

const Card = ({ item }) => {
  const [click, setClick] = useState(false);
  const select = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("You successfully added the item!");
    let exists = false;
    select.forEach((list) => (list.name == item.name ? (exists = true) : ""));
    if (exists) {
      dispatch(addMore(item));
    } else {
      dispatch(addToCart(item));
    }
    setClick(true);
  };

  return (
    // <div className="flex justify-between items-center gap-[20px] p-6 bg-gray-200/30 w-[400px] shadow-md hover:shadow-lg cursor-pointer">

    //     <img
    //     src={item.source}
    //     alt="mobile"
    //     className="aspect-[10/11] w-[200px] h-[200px] object-cover rounded-3xl"
    //   />

    //   <div className="flex flex-col justify-center gap-[40px]">
    //     <h2 className="text-xl font-semibold">{item.name}</h2>
    //     <h2 className="text-xl font-bold">${item.price}</h2>
    //     <button className={`flex justify-center items-center w-[100px] h-[30px] text-purple-700/75 transition duration-300 linear ${!click ? 'border rounded-sm hover:bg-purple-700/75 hover:text-white hover:cursor-pointer hover:transition hover:duration-300 hover:linear' : 'w-[150px]'}`} onClick={notify}>
    //       {click ? "Items Added To Cart!" : "Add To Cart"}
    //     </button>
    //   </div>
    // </div>
    <div className="p-6 bg-slate-500/32 relative w-[315px] h-[200px]">
      <img
        src={item.source}
        alt={item.name}
        className="w-[200px] h-[200px] object-cover absolute -bottom-[130px] -left-[100px] rounded-4xl"
      />
      <div className="flex flex-col justify-center gap-[20px]">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <h2 className="text-xl font-bold">${item.price}</h2>
        <div className="absolute bottom-10 right-10">
          <button
          className={`flex justify-center items-center w-[100px] h-[30px] text-purple-700/75 transition duration-300 linear ${
            !click
              ? "border rounded-sm hover:bg-purple-700/75 hover:text-white hover:cursor-pointer hover:transition hover:duration-300 hover:linear"
              : "w-[150px]"
          }`}
          onClick={notify}
        >
          {click ? "Items Added To Cart!" : "Add To Cart"}


          
        </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
