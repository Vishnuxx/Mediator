import { useContext, useEffect, useState } from "react";
import { MediatorContext } from "../../../../state/Providers/MediatorProvider";
import {  useMonaco } from "@monaco-editor/react";

function BodyTab() {
	const { mediator } = useContext(MediatorContext);
	const [body, setBody] = useState(mediator.body.get());
	const [contenttype , setContentType] = useState(mediator.header.getContentType()??"")

	const updateBody = (value) => {
		mediator.body.set(value);
		setBody(mediator.body.get());
	};

	const updateContentType = (e) => {

		mediator.header.updateContentType(e.target.value)
		setContentType(mediator.header.getContentType())
	}

	const monaco = useMonaco();

	useEffect(() => {
		
		const editorInstance = monaco.editor.create(
			document.getElementById("body-editor"),
			{
				value: body,
				language: "json",
				automaticLayout: true,
				theme: "vs-dark",
				minimap: { enabled: false },
				// scrollbar: { vertical: "hidden" },
			}
		);

		editorInstance.onDidChangeModelContent(() => {
			const updatedValue = editorInstance.getValue();
			updateBody(updatedValue);
		});

		return () => {
			editorInstance.dispose();
		};
	}, []);

	return (
		<div className="w-full h-full overflow-scroll  text-start ">
			<div className="w-full h-[50px] text-gray-400 text-semibold px-4 box-border flex items-center border-b border-[#202020]">
				<p className="w-fit">ContentType : </p>
				<select
				onChange={updateContentType}
					name="authtype"
					id="type"
					className="bg-transparent p-2 font-bold text-white focus:outline-none"
					value={contenttype}
				>
					<option value="none">NONE</option>
					<option value="none">application/json</option>
					<option value="basic">application/Id+json</option>
					<option value="bearer">application/hal+json</option>
					<option value="oauth2">application/vnd.api+json</option>
					<option value="apikey">application/xml</option>
					<option value="none">application/x-www-form-urlencoded</option>
					<option value="basic">application/form-data</option>
					<option value="bearer">text/html</option>
					<option value="oauth2">text/plain</option>
				</select>
			</div>

			<div id="body-editor" className="w-full h-full"></div>
		</div>
	);
}

export default BodyTab;
