export default function Params() {
	const params = [{ enabled: true, key: "", value: "" }];
	this.getParams = () => params;

	this.addParam = (key, value) => {
		params.push({ enabled: true, key: "", value: "" });
	};

	this.removeParam = (index) => {
		params.splice(index, 1);
	};

	this.updateParam = (index, key, value) => {
		params[index][key] = value;
	};

	this.parseParams = () => {
		const obj = {};
		params.map((item, index) => {
			if (item.enabled) {
				if ([undefined, null].includes(item.value)) {
					obj[item.key] = obj[item.key] + "," + item.value;
				} else {
					obj[item.key] = item.value;
				}
			}
		});
		return obj;
	};
}
