export const BodyType = {};

export default function BodyManager() {
	let data = "";

	this.get = () => data;

    this.set = (inp) => {
        data = inp;
    }

	this.parse = () => {
        let output = data;
        if(isValidJSON(output)) {
            return JSON.parse(output);
        }
        return output
    };

	function isValidJSON(input) {
		try {
			JSON.parse(input);
			return true;
		} catch (error) {
			return false;
		}
	}
}
