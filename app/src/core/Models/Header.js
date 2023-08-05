export default function Header() {
	const header = [{ enabled: true, key: "", value: "" }];
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

	this.parse = () => {
		const obj = {};
		header.map((item, index) => {
			if (item.enabled && ![undefined, null , ].includes(item.value) ) {
				if (![item.key , item.value].includes("")) {
					obj[item.key] = item.value;
				} 
					

			}
		});
		return obj;
	};
}
