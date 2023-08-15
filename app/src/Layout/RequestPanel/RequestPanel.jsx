import UrlPane from "./Components/URLPane/UrlPane";
import { ReqPropTab } from "./ReqPropTab";

function RequestPanel() {
	return (
		<div className=" w-[100%] h-full flex flex-col  p-0 overflow-auto">
			<p className="w-fit pl-4 pt-2 text-gray-500">Request</p>
			<UrlPane></UrlPane>
			<ReqPropTab />
		</div>
	);
}

export default RequestPanel;
