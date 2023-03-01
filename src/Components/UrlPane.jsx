

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