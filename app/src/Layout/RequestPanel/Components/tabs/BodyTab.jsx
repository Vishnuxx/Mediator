
import { useState } from "react";




function BodyTab() {
    const [state, setstate] = useState({
        code : ""
    });
   
  return (
		<div className="w-full h-full overflow-scroll  text-start ">
			<div className="w-full h-[50px] text-gray-400 text-semibold px-4 box-border flex items-center border-b border-[#202020]">
				<p className="w-fit">ContentType : </p>
				<select
					name="authtype"
					id="type"
					className="bg-transparent p-2 font-bold text-white focus:outline-none"
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
			<div className="overflow-scroll flex bg-black">
				
			</div>
		</div>
	);
}

export default BodyTab;

