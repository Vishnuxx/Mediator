

import TableComponent from "../../Components/ReqPropsTab/Table";
import UrlPane from "../../Components/UrlPane";
import ReqPropTab from "./Components/tabs/ReqPropTab"



function RequestPanel() {
    return (
     
        <div className=" w-[100%] h-[100%]">
          <UrlPane></UrlPane>
          <ReqPropTab></ReqPropTab>
          <TableComponent></TableComponent>
        </div>
     
    ); 
}

export default RequestPanel;