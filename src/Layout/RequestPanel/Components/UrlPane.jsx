import { useContext, useState } from "react";
import { MediatorContext } from "../../../state/Providers/MediatorProvider";
import { REQ_TYPE } from "../../../core/Mediator";

function UrlPane() {
	const { mediator } = useContext(MediatorContext);
	const [url, seturl] = useState(mediator.getURL());

	const onURLChange = (e) => {
		mediator.setURL(e.target.value);
		seturl(mediator.getURL());
		mediator.debug();
	};
	const onReqMethodChanged = (e) => {
		console.log(e.target.value);
		mediator.setMethod(e.target.value);
		mediator.debug();
	};

	const onSend = () => {
		mediator.send();
	};

	return (
		<div className={` w-full flex p-2 pt-3 `}>
			<div className="flex w-full items-center m-1 bg-[#202020] rounded-md overflow-hidden">
				<select
					onChange={onReqMethodChanged}
					className=" bg-transparent border-r-[1px] border-[#363636] text-sm font-bold text-gray-300 py-2 pl-4 pr-8  rounded-l-md focus:outline-none"
				>
					<option value={REQ_TYPE.GET}>GET</option>
					<option value={REQ_TYPE.POST}>POST</option>
					<option vvalue={REQ_TYPE.OPTION}>OPTION</option>
					<option value={REQ_TYPE.UPDATE}>UPDATE</option>
					<option value={REQ_TYPE.DELETE}>DELETE</option>
				</select>
				<input
					onChange={onURLChange}
					value={url}
					className={` bg-transparent py-1 px-4 text-sm text-white w-[100%] border-gray-600 rounded-none focus:outline-none`}
					type="text"
					placeholder="Enter text"
				/>
				<button onClick={onSend} className="py-2 px-8 text-sm  bg-indigo-500 font-bold text-gray-100 border-gray-600  focus:outline-none hover:bg-indigo-600">
					Send
				</button>
			</div>
		</div>
	);
}

export default UrlPane;
