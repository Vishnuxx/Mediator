import { useContext, useEffect, useState } from "react";
import { TabContent, TabView } from "../../GenericComponents/TabView";
import { MediatorContext } from "../../state/Providers/MediatorProvider";

import { JSONViewer } from "react-json-editor-viewer";


function ResponsePanel() {
	const { mediator } = useContext(MediatorContext);
	const [responsedata, setresponsedata] = useState({data:"" , time:"" , size:""});
	let options = {
		lineNumbers: true,
		smartIndent: true,
		indentWithTabs: true,
		indentUnit: 2,
		tabSize: 4,
		theme: "dracula",
		lineWrapping: true,
		mode: { name: "javascript", json: true },

		// theme: "material-dark",
	};
	useEffect(() => {
		mediator.subscribeResponse(setData);
		return () => mediator.unsubscribeResponse(setData);
	}, []);

	const setData = ({ data, time, size }) => {
		console.log(data);
		setresponsedata({ data: data, time, size });
	};
	const editorDidMount = (editor, monaco) => {
		// Here, you can access the monaco instance and do additional configurations if needed
	};

	const handleEditorChange = (newValue, e) => {
		
	};
	return (
		<div className="h-full w-full flex flex-col justify-start">
			<p className="w-fit pl-4 pt-2 text-gray-500">Response</p>
			<div className="w-full h-fit border-b px-4 border-[#202020]">
				<TabView>
					<TabContent label="JSON"></TabContent>
					<TabContent label="Raw"></TabContent>
				</TabView>
			</div>
			<div className="h-full flex w-full  text-start">
				{/* {responsedata.data} */}
				<JSONViewer
					collapsible
					styles={styles}
					data={responsedata.data}
				/>
			</div>
		</div>
	);
}

export default ResponsePanel;

const styles = {
	dualView: {
		display: "flex",
	},
	jsonViewer: {
		borderLeft: "1px dashed white",
		lineHeight: 1.25,
		width: "50%",
		borderLeft: "1px solid lightgrey",
		margin: 10,
	},
	jsonEditor: {
		width: "50%",
		fontSize: 12,
		fontFamily: "Lucida Console, monospace",
		lineHeight: 1.25,
	},
	root: {
		fontSize: 12,
		fontFamily: "Lucida Console, monospace",
		lineHeight: 1.25,
		color: "#3E3D32"
	},
	label: {
		color: "DeepPink",
		marginTop: 30,
	},
	value: {
		marginLeft: 10,
		color:"white"
	},
	row: {
		display: "flex",
	},
	withChildrenLabel: {
		color: "DeepPink",
	},
	select: {
		borderRadius: 3,
		borderColor: "grey",
		backgroundColor: "DimGray",
		color: "khaki",
	},
	input: {
		borderRadius: 3,
		border: "1px solid #272822",
		padding: 2,
		fontFamily: "Lucida Console, monospace",
		fontSize: 15,
		backgroundColor: "gray",
		color: "khaki",
		width: "200%",
	},
	addButton: {
		cursor: "pointer",
		color: "LightGreen",
		marginLeft: 15,
		fontSize: 12,
	},
	removeButton: {
		cursor: "pointer",
		color: "magenta",
		marginLeft: 15,
		fontSize: 12,
	},
	saveButton: {
		cursor: "pointer",
		color: "green",
		marginLeft: 15,
		fontSize: 12,
	},
	builtin: {
		color: "green",
		fontSize: 14,
	},
	text: {
		color: "green",
		fontSize: 14,
	},
	number: {
		color: "purple",
		fontSize: 14,
	},
	property: {
		color: "DeepPink",
		fontSize: 14,
	},
	collapseIcon: {
		cursor: "pointer",
		fontSize: 16,
		color: "teal",
		marginLeft:10
	},
};

