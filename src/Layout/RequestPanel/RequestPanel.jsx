
import ReqPropTab from "../../Components/ReqPropsTab/ReqPropTab";
import TableComponent from "../../Components/ReqPropsTab/TableComponent";
import UrlPane from "../../Components/UrlPane";


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