function ResponseManager() {
	const callbacks = [];
	let time = 0,
		size = 0;

	this.startRequest = () => {
		time = new Date().getTime();
	};

	this.endRequest = (response) => {
		time = new Date().getTime() - time + "ms";
		size = new TextEncoder().encode(response).length / 1024 + "kb";
	};

	this.subscribe = (callback) => {
		callbacks.push(callback);
	};

	this.unsubscribe = (callback) => {
		callbacks.filter((cb) => cb !== callback);
	};

	this.dispatchResponse = (responsedata) => {
		callbacks.map((callback) => {
			callback({ data: responsedata, time, size });
		});
	};
}

export default ResponseManager;
