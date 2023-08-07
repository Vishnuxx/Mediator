export default function HeaderManager() {
	const header = [{ enabled: true, key: "", value: "" }];
	let contentType = null;

	this.get = () => header;

	this.add = (key, value) => {
		header.push({ enabled: true, key: "", value: "" });
	};

	this.remove = (index) => {
		header.splice(index, 1);
	};

	this.update = (index, key, value) => {
		header[index][key] = value;
	};

	this.getContentType = () => contentType

	this.updateContentType = (value) => contentType = value

	this.parse = () => {
		const obj = {};
		header.map((item, index) => {
			if (item.enabled && ![undefined, null].includes(item.value)) {
				if (![item.key, item.value].includes("")) {
					obj[item.key] = item.value;
				}
			}
		});

		if (contentType && obj["Content-Type"] === contentType) {
			obj["Content-Type"] = contentType;
		}
		return obj;
	};
}
