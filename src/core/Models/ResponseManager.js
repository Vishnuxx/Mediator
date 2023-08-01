function ResponseManager() {
	const callbacks = [];
	let time = 0,
		size = 0,
        status = 404;

	this.startRequest = () => {
		time = new Date().getTime();
	};

	this.endRequest = (response) => {
		time = new Date().getTime() - time + " ms";
		size = (JSON.stringify(response.data).length / 1024).toFixed(2)  + " kb";
        status = response.status
	};

	this.subscribe = (callback) => {
		callbacks.push(callback);
	};

	this.unsubscribe = (callback) => {
		callbacks.filter((cb) => cb !== callback);
	};

	this.dispatchResponse = (responsedata) => {
		callbacks.map((callback) => {
			callback({ data: responsedata, time, size , status });
		});
	};
}

export default ResponseManager;
