import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TabContent, TabView } from "../../GenericComponents/TabView";
import { MediatorContext } from "../../state/Providers/MediatorProvider";

import { loader } from "@monaco-editor/react";

function ResponsePanel() {
	const { mediator } = useContext(MediatorContext);
	const editor = useRef();

	const [responsedata, setresponsedata] = useState({
		data: "",
		time: "",
		size: "",
		status: "",
	});

	useEffect(() => {
		async function init() {
			const monacoinstance = await loader.init();

			const monaco = monacoinstance.editor.create(
				document.getElementById("response-viewer"),
				{
					value: responsedata.data,
					language: "json",
					automaticLayout: true,
					theme: "vs-dark",
					minimap: { enabled: false },
					// scrollbar: { vertical: "hidden" },
				}
			);

			editor.current = monaco;
			console.log(editor.current);

			monaco.onDidChangeModelContent(() => {
				const updatedValue = monaco.getValue();
			});
		}

		init();

		console.log(editor.current);

		return () => {
			editor.current = null;
		};
	}, []);

	useEffect(() => {
		mediator.subscribeResponse(setData);

		return () => {
			mediator.unsubscribeResponse(setData);
		};
	}, []);

	const setData = ({ data, time, size, status }) => {
		setresponsedata({ data: data, time, size, status });
		editor.current.setValue(JSON.stringify(data, undefined, 4));
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

			<div id="response-viewer" className="h-full flex   text-start"></div>
		</div>
	);
}

export default ResponsePanel;
