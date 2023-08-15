import { useState } from "react";
import { useAuthTab } from "./useAuthTab";

function AuthorizationTab() {
	const { options, authorizationData, handleInputChange } = useAuthTab();

	return (
		<>
			<div className="w-full  overflow-scroll text-start ">
				<div className="w-full h-[50px] text-gray-400 text-semibold px-4 box-border flex items-center border-b border-[#202020]">
					<p className="w-fit">Authorisation : </p>
					<select
						name="authtype"
						id="type"
						className="bg-transparent p-2 font-bold text-white focus:outline-none"
						onChange={handleInputChange}
						value={authorizationData.authtype}
					>
						<option value="none">NONE</option>
						<option value="basic">Basic Auth</option>
						<option value="bearer">Bearer Token</option>
						<option value="oauth2">OAuth 2.0</option>
						<option value="apikey">API Key</option>
					</select>
				</div>
				<div className="flex flex-col w-full h-full px-5">
					{options[authorizationData.authtype] &&
						options[authorizationData.authtype].map((field) => (
							<input
								className="bg-transparent w-full p-2 border-b border-1 text-white border-[#202020] focus:outline-none"
								key={field}
								type={field.includes("password") ? "password" : "text"}
								name={field}
								placeholder={field}
								value={authorizationData[field]}
								onChange={handleInputChange}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default AuthorizationTab;
