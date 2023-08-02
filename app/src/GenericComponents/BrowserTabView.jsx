import { Children, useState } from "react";
import { getColor } from "../constants/AppColors";

const data = {};

export function BrowserTabView({ children }) {
  const [activeItem, setactiveItem] = useState(0);
  return (
    <div
      className={`flex h-[fit-content] pr-[300px] bg-[#202020] box-border overflow-auto no-scrollbar`}
    >
      {Children.map(children, (child, index) => {
        return (
          <div
            onClick={() => setactiveItem(index)}
            className={`${
              activeItem === index
                ? "border-t-2 border-indigo-300 text-gray-100 bg-[#171717]"
                : "text-gray-500 hover:text-gray-400"
            } `}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function BrowserTab({ label , method}) {
  return (
    <div
      className={` w-[150px] h-[35px] flex flex-row  box-border content-center items-center pt-2 pb-2  select-none cursor-pointer `}
    >
      <div className="flex flex-row h-[100%]  border-r-[1px] border-gray-600 pr-3 pl-3 content-between items-center w-[100%]">
        <p className=" text-green-600 font-semibold h-fit pr-2 text-xs">{method}</p>
        <p className=" m-0 font-bold h-fit w-[100%]  text-xs  ">{label}</p>
        <button className="h-[25px] w-[25px] text-gray-300 p-[3px] box-border text-sm hover:text-gray-100 hover:font-bold">
          X
        </button>
      </div>
    </div>
  );
}
