import { useContext, useEffect, useState } from "react";
import { TabContent, TabView } from "../../GenericComponents/TabView";
import { MediatorContext } from "../../state/Providers/MediatorProvider";

import { JSONViewer } from "react-json-editor-viewer";
import { Editor } from "@monaco-editor/react";

function ResponsePanel() {
	const { mediator } = useContext(MediatorContext);
	const [responsedata, setresponsedata] = useState({
		data: "",
		time: "",
		size: "",
		status: "",
	});

	useEffect(() => {
		mediator.subscribeResponse(setData);
		return () => mediator.unsubscribeResponse(setData);
	}, []);

	const setData = ({ data, time, size, status }) => {
		console.log(data);
		setresponsedata({ data: data, time, size, status });
	};

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
				<div className="w-full h-fit border-b px-4 border-[#202020]">
					<TabView>
						<TabContent label="JSON"></TabContent>
						<TabContent label="Raw"></TabContent>
					</TabView>
				</div>
			</div>

			<div className="h-full flex   text-start">
				{/* {responsedata.data} */}
				{/* <JSONViewer collapsible styles={styles} data={responsedata.data} /> */}
				<Editor
				
					height="85vh"
					// width={`100%`}
					language={"json"}
					value={JSON.stringify(responsedata.data , null , 2)}
					theme={"vs-dark"}
					options={{
						
						readOnly: false,
						minimap: {
							enabled: false,
							
						},
						fontSize: 13,
						cursorStyle: "block",
						wordWrap: "on",
					
					}}
					defaultValue=""
					// onChange={handleEditorChange}
				/>
			</div>
		</div>
	);
}

export default ResponsePanel;

