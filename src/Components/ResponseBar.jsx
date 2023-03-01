import { useState } from "react";

function ResponseBar(props) {
    const [response , setResponse] = useState("");
    props.mediator.events.onResponseLoad.register(() => {
        setResponse(props.mediator.getResponseText())
        console.log(props.mediator.getResponseText())
    }) 

    return <div className="Response-Bar">
         <p style={{textAlign:"start" , padding:"8px"}}>{response}</p>
         </div>
     
 }
 
 export default ResponseBar;