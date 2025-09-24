import { useDispatch, useSelector } from "react-redux";
import { addMore, removeFromCart, removeMore } from "../features/Cart/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const ListOfItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeFromCart(item));
    }

    const removeDuplicate = () => {
        if(item.count == 1){
            dispatch(removeFromCart(item))
        }
        else{
            dispatch(removeMore(item));
        }
    }

    const addDuplicate = () => {
        dispatch(addMore(item));
    }

  return (
    <li className="flex justify-between bg-slate-300/20 rounded-2xl border border-slate-700/20 overflow-hidden shadow-xl">
      <div className="flex justify-center items-center gap-[20px]">
        <div className="w-[200px] h-[200px]">
          <img
            src={item.source}
            alt="mobile"
            className="w-[200px] h-[200px] object-cover rounded-3xl rounded-tl-none rounded-bl-none"
          />
        </div>
        <div className="flex flex-col justify-around gap-[40px]">
          <div className="flex flex-col justify-center gap-[5px]">
            <h2 className="text-xl font-semibold mb-3">{item.name}</h2>
            <h2 className="text-xl font-bold">Price: ${item.price}</h2>
          </div>
          <div>
            <button className="text-purple-700 tracking-widest cursor-pointer" onClick={removeItem}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mr-10">
        <div className="rounded-md border overflow-hidden">
          <button className="px-4 py-2 border-r border-black cursor-pointer hover:bg-slate-500 hover:text-white" onClick={removeDuplicate}>
            -
          </button>
          <span className="px-4 py-2 font-bold">{item.count}</span>
          <button className="px-4 py-2 border-l border-black cursor-pointer hover:bg-slate-500 hover:text-white" onClick={addDuplicate}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};
export default ListOfItem;
