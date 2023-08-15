import { useState } from "react";

export function useAuthTab() {
    const [authorizationData, setFormData] = useState({
			authtype: "none",
			username: "",
			password: "",
			token: "",
			discoveryUrl: "",
			authorizationUrl: "",
			accessTokenUrl: "",
			clientId: "",
			clientSecret: "",
			clientScope: "",
			apiKey: "",
			apiValue: "",
		});

		const options = {
			none: null,
			basic: ["username", "password"],
			bearer: ["token"],
			oauth2: [
				"token",
				"discoveryUrl",
				"authorizationUrl",
				"accessTokenUrl",
				"clientId",
				"clientSecret",
				"clientScope",
			],
			apikey: ["apiKey", "apiValue"],
		};

		const handleInputChange = (e) => {
			const { name, value } = e.target;
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		};

        return { options, authorizationData, handleInputChange };
}