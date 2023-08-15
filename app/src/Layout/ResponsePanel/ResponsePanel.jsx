import { TabContent, TabView } from "../../genericComponents/TabView";
import { useResponsePanel } from "./useResponsePanel";

function ResponsePanel() {
	const { responsedata } = useResponsePanel();

	return (
		<div className="h-full w-full flex flex-col justify-start overflow-y-auto no-scrollbar">
			<div className=" sticky top-[0px] bg-[#181818]">
				<div className="flex w-full h-fit p-2 font-bold text-gray-400 text-xs">
					<p className="w-fit pl-4 m-0">
						Status:{" "}
						<span className="text-green-600">{responsedata.status}</span>
					</p>
					<p className="w-fit pl-4 m-0">
						Time: <span className="text-green-600">{responsedata.time}</span>
					</p>
					<p className="w-fit pl-4 m-0">
						Size: <span className="text-green-600">{responsedata.size}</span>
					</p>
				</div>
			</div>
			<div className="w-full h-fit border-b px-4 border-[#202020]">
				<TabView>
					<TabContent label="JSON"></TabContent>
					<TabContent label="Headers"></TabContent>
				</TabView>
			</div>
			<div id="response-viewer" className="h-[100%] flex text-start"></div>
		</div>
	);
}

export default ResponsePanel;
