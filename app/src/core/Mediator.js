import axios from "axios";
import Params from "./Models/Params";
import ResponseManager from "./Models/ResponseManager";
import Header from "./Models/Header";

export const REQ_TYPE = {
	GET: "GET",
	POST: "POST",
	UPDATE: "UPDATE",
	DELETE: "DELETE",
	OPTIONS: "OPTIONS",
};

export default function Mediator() {
	let METHOD = REQ_TYPE.GET;
	let URL = "https://fakerapi.it/api/v1/companies";

	const responseManager = new ResponseManager();

	this.params = new Params();
	this.header = new Header();

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
				headers: this.header.parse(),
				params: this.params.parse(),
			});
			responseManager.endRequest(response);
			responseManager.dispatchResponse(response.data);
			return response.data;
		} catch (error) {
			console.log(error, this.header.parse());
		}
	};

	this.response = () => {};

	this.debug = () => {
		console.log(METHOD, URL);
	};
}
