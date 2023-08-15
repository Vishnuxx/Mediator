import { useMonaco } from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";
import { MediatorContext } from "../../../../../state/Providers/MediatorProvider";


export function useBodyTab(editorid) {
    const { mediator } = useContext(MediatorContext);
		const [body, setBody] = useState(mediator.body.get());
		const [contenttype, setContentType] = useState(
			mediator.header.getContentType() ?? ""
		);

		const updateBody = (value) => {
			mediator.body.set(value);
			setBody(mediator.body.get());
		};

		const updateContentType = (e) => {
			mediator.header.updateContentType(e.target.value);
			setContentType(mediator.header.getContentType());
		};

		const monaco = useMonaco();

		useEffect(() => {
			const editorInstance = monaco.editor.create(
				document.getElementById(editorid),
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

        return {contenttype , updateContentType}
}