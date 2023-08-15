import { useContext, useEffect, useState } from "react";
import { MediatorContext } from "../../../../../state/Providers/MediatorProvider";
import { useMonaco } from "@monaco-editor/react";
import { useBodyTab } from "./useBodyTab";

function BodyTab() {
	const { contenttype, updateContentType } = useBodyTab("body-editor");

	return (
		<div className="w-full h-full overflow-scroll  text-start ">
			<div className="w-full h-[50px] text-gray-400 text-semibold px-4 box-border flex items-center border-b border-[#202020]">
				<p className="w-fit">ContentType : </p>
				<select
					onChange={updateContentType}
					name="authtype"
					id="type"
					className="bg-transparent p-2 font-bold text-white focus:outline-none"
					value={contenttype}
				>
					<option value="none">NONE</option>
					<option value="none">application/json</option>
					<option value="basic">application/Id+json</option>
					<option value="bearer">application/hal+json</option>
					<option value="oauth2">application/vnd.api+json</option>
					<option value="apikey">application/xml</option>
					<option value="none">application/x-www-form-urlencoded</option>
					<option value="basic">application/form-data</option>
					<option value="bearer">text/html</option>
					<option value="oauth2">text/plain</option>
				</select>
			</div>

			<div id="body-editor" className="w-full h-full"></div>
		</div>
	);
}

export default BodyTab;
