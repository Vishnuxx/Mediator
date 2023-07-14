<<<<<<< HEAD


import { Button, Pane, TextInput } from "evergreen-ui";
import { useState } from "react";




function UrlPane(props) {
    let options = ["GET" , "POST" , "UPDATE" , "DELETE"]
   
   
    const [url , setUrl] = useState("")

    function generateOptions() {
       let gen =  options.map((value , index) => {
            return <option key={index} value={value}>{value}</option>
        })
       return gen;
    }

    return (
      <Pane display="flex">
          <select
            name="req-type"
            id="req-type"
            onChange={(e) => props.mediator.setRequestType(e.target.value)}
          >
            {generateOptions()}
          </select>

          <input
           // appearance="default"
            width="50vw"
            type="url"
            className="url-input"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a url eg: https://google.com"
          />

          <Button
            appearance="default"
            width="100px"
            color="white"
            background="green"
            onClick={(e) => {
              props.mediator.setUrl(url);
            }}
          >
            Send
          </Button>
        
      </Pane>
    );
}


// function RequestTypeSelector(props) {
//   return (
    
//   );
// }


export default UrlPane;
=======
import { getColor } from "../constants/AppColors";

function UrlPane() {
  
  return (
    <div className={`bg-[${getColor("secondaryBg")}] w-[100%] p-0 pt-3 `}>
      <div className="flex  items-center m-1 bg-[] rounded-md overflow-hidden">
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
>>>>>>> main
