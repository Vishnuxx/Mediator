export default function Params() {
	const params = [{ enabled: true, key: "", value: "" }];
	this.get = () => params;

	this.add = () => {
		params.push({ enabled: true, key: "" , value: "" });
	};

	this.remove = (index) => {
		params.splice(index, 1);
	};

	this.update = (index, key, value) => {
		params[index][key] = value;
	};

	this.parse = () => {
		const obj = {};
		params.map((item, index) => {
			if (item.enabled && ![undefined, null].includes(item.value)) {
				if (![item.key, item.value].includes("")) {
					obj[item.key] = item.value;
				}
			}
		});
		return obj;
	};
}
