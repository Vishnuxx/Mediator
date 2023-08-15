import { useContext, useEffect, useRef, useState } from "react";
import { MediatorContext } from "../../state/Providers/MediatorProvider";
import { initEditor } from "./helpers";

export function useResponsePanel() {
	const { mediator } = useContext(MediatorContext);
	const editorRef = useRef();
	const [responsedata, setresponsedata] = useState({
		data: "",
		time: "",
		size: "",
		status: "",
	});

	useEffect(() => {
		mediator.subscribeResponse(responseHandler);
		editorRef.current = init();
		return () => {
			editorRef.current = null;
			mediator.unsubscribeResponse(responseHandler);
		};
	}, []);

	async function init() {
		editorRef.current = await initEditor("response-viewer");
	}

    //update the state of the response when subscribed
	const responseHandler = ({ data, time, size, status }) => {
		setresponsedata({ data: data, time, size, status });
		editorRef.current.setValue(JSON.stringify(data, undefined, 4));
	};

	return { responsedata };
}
