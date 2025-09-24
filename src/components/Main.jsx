import Card from "./Card";
import items from "../items.json";
import { useEffect, useState } from "react";

const Main = () => {
    const [cat, setCat] = useState('');
    const [list, setList] = useState(items);
    useEffect(() => {
        setList(items.filter((item) => item.Tags.toLowerCase().includes(cat.toLowerCase())));
    }, [cat])
  return (
    <main className="grow">
      <section className="w-full h-auto relative">
        <div className="container mx-auto p-8">
          <div className="flex flex-col gap-[50px] container mx-auto p-18 pb-0">
            <h1 className="text-6xl font-bold tracking-tight font-serif border-b pb-3">
              Electronics
            </h1>
            <div className="bg-slate-400/20 px-6 py-1 w-[400px] rounded-2xl flex items-center gap-[20px] group h-[50px]">
              <div className={`flex justify-center items-center ${cat != '' ? 'translate-y-[9px]' : ""} group-focus-within:translate-y-[9px] transition-all duration-300 linear`}>
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-2xl"
              >
                <g clipPath="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="white" />
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#000000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </div>
              <div className="relative">
                <p className={`absolute top-0 left-0 pointer-events-none group-focus-within:translate-x-[1px] group-focus-within:translate-y-[-5px] group-focus-within:text-xs transition-all duration-300 linear ${cat != '' ? 'translate-y-[-5px] translate-x-[1px] text-xs': ""}`}>Search For A Phone</p>
                <input
                type="text"
                placeholder=""
                className={`outline-none w-[400px] focus:pt-4 ${cat != '' ? 'pt-4': ""}`}
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[150px] p-12 mb-38 ml-20">
          {list.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Main;
