import axios from "axios";
import Params from "./Models/Params";
import ResponseManager from "./Models/ResponseManager";

export const REQ_TYPE = {
	GET: "GET",
	POST: "POST",
	UPDATE: "UPDATE",
	DELETE: "DELETE",
	OPTION: "OPTION",
};

export default function Mediator() {
	let METHOD = REQ_TYPE.GET;
	let URL = "https://fakerapi.it/api/v1/companies";

	const responseManager = new ResponseManager();

	this.params = new Params();

	this.getMethod = () => METHOD;
	this.getURL = () => URL;

	this.setMethod = (method) => (METHOD = method);
	this.setURL = (url) => (URL = url);

	this.subscribeResponse = (callback) => {
		responseManager.subscribe(callback);
	};

	this.unsubscribeResponse = (callback) => {
		responseManager.unsubscribe(callback);
	};

	this.send = async () => {
		try {
			responseManager.startRequest();
			const response = await axios({
				url: URL,
				method: METHOD,
				headers: {},
				params: this.params.parseParams(),
			});
			responseManager.endRequest(response);
			responseManager.dispatchResponse(response.data);
			return response.data;
		} catch (error) {
			console.log(error)
		}
	};

	this.response = () => {};

	this.debug = () => {
		console.log(METHOD, URL);
	};
}
