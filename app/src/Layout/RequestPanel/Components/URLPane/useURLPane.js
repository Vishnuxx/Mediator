import { useContext, useState } from "react";
import { MediatorContext } from "../../../../state/Providers/MediatorProvider";

export function useURLPane() {
	const { mediator } = useContext(MediatorContext);
	const [url, seturl] = useState(mediator.getURL());

	const onURLChange = (e) => {
		mediator.setURL(e.target.value);
		seturl(mediator.getURL());
		mediator.debug();
	};
	const onReqMethodChanged = (e) => {
		mediator.setMethod(e.target.value);
		mediator.debug();
	};

	const onSend = () => {
		mediator.send();
	};

    return {url , onURLChange , onReqMethodChanged , onSend}
}
