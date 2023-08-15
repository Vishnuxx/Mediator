import { loader } from "@monaco-editor/react";

export const initEditor = async (elementId) => {
	const monacoinstance = await loader.init();
	const monaco = monacoinstance.editor.create(
		document.getElementById(elementId),
		{
			value: "",
			language: "json",
			automaticLayout: true,
			theme: "vs-dark",
			minimap: { enabled: false },
            wrap:true
			// scrollbar: { vertical: "hidden" },
		}
	);


    return monaco
};
