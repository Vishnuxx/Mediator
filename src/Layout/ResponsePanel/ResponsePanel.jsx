import { TabContent, TabView } from "../../GenericComponents/TabView";
import { ReqPropTab } from "../RequestPanel/Components/ReqPropTab";

function ResponsePanel() {
  return (
		<div className="h-full w-full flex flex-col justify-start">
			<p className="w-fit pl-4 pt-2 text-gray-500">Response</p>
			<div className="w-full h-fit border-b px-4 border-[#202020]">
				<TabView>
					<TabContent label="JSON"></TabContent>
					<TabContent label="Raw"></TabContent>
				</TabView>
			</div>
			{/* <ReqPropTab></ReqPropTab> */}
		</div>
	);
}

export default ResponsePanel;
