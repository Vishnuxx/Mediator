import logo from "../assets/logo.svg"

function AppBar() {
  return (
    <div className="flex flex-row items-center text-gray-400 bg-[#171717] border-b border-[#202020] p-[10px] h-fit">

        <img src={logo} className="h-[25px] w-[25px] mr-2" alt="mediator" />
 
      <h5 className="text-md">
        MEDIATOR
      </h5>
    </div>
  );
}

export default AppBar;
