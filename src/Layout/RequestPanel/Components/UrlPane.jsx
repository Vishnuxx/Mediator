function UrlPane() {
  return (
    <div className={` w-[100%] p-2 pt-3 `}>
      <div className="flex  items-center m-1 bg-[#202020] rounded-md overflow-hidden">
        <select className=" bg-transparent border-r-[1px] border-[#363636] text-sm font-bold text-gray-300 py-2 pl-4 pr-8  rounded-l-md focus:outline-none">
          <option value="">GET</option>
          <option value="">POST</option>
          <option value="">OPTION</option>
          <option value="">UPDATE</option>
          <option value="">DELETE</option>
        </select>
        <input
          className={` bg-transparent py-1 px-4 text-sm text-white w-[100%] border-gray-600 rounded-none focus:outline-none`}
          type="text"
          placeholder="Enter text"
        />
        <button className="py-2 px-8 text-sm  bg-indigo-500 font-bold text-gray-100 border-gray-600  focus:outline-none hover:bg-indigo-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default UrlPane;
