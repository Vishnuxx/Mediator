import { getColor } from "../../constants/AppColors";

const data = {

}

function TabView({width="100%" , height="30px" , bg="transparent"}) {
    return (
      <div
        className={`flex h-[fit-content] bg-[${getColor("appbar")}] box-border overflow-auto no-scrollbar`}
      >
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
      </div>
    );
}

export default TabView;


function Tab({selected=true}) {
    return (
      <div
        className={` active:bg-[#202020]  w-[150px] h-[35px]  border-indigo-500 border-t-2 flex flex-row  box-border content-center items-center text-gray-500 hover:text-gray-300 active:text-gray-100  select-none cursor-pointer `}
      >
        <div className="flex flex-row h-[100%] p-0 border-r-[1px] border-gray-600 pr-3 pl-3 content-between items-center w-[100%]">
          <p className=" text-green-600 font-semibold h-fit pr-2 text-xs">
            GET
          </p>
          <p className=" m-0 font-bold h-fit w-[100%]  text-xs  ">hello</p>
          <button className="h-[25px] w-[25px] text-gray-300 p-[3px] box-border text-sm hover:text-gray-100 hover:font-bold">
            X
          </button>
        </div>
      </div>
    );
}

