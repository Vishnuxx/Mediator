import Split from "@uiw/react-split";

import RequestPanel from "./Layout/RequestPanel/RequestPanel";
import AppBar from "./Components/Appbar";
import ResponsePanel from "./Layout/ResponsePanel/ResponsePanel";
import { MediatorProvider } from "./state/Providers/MediatorProvider";


function Editor(props) {
	return (
		<MediatorProvider>
			<section
				className={`w-[100%] h-screen box-border flex flex-col bg-green-300 overflow-scroll `}
			>
				<AppBar></AppBar>
				<Split
					className={`bg-[#17171700] flex-1 w-full `}
					renderBar={renderbar}
				>
					<div className={` w-full flex  flex-col  bg-[#171717]`}>
						<Split mode="horizontal" renderBar={renderbar} className="h-full">
							<div
								className={`h-full w-[100%] flex flex-col overflow-hidden  bg-[#171717]`}
							>
								<RequestPanel></RequestPanel>
							</div>
							<div className={`h-[100%] w-[100%] bg-[#171717]`}>
								<ResponsePanel></ResponsePanel>
							</div>
						</Split>
					</div>
				</Split>
			</section>
		</MediatorProvider>
	);
}

export default Editor;

const renderbar = ({ onMouseDown, ...props }) => {
	return (
		<div {...props} style={{ boxShadow: "none", background: "transparent" }}>
			<div
				onMouseDown={onMouseDown}
				style={{
					backgroundColor: "#262626",
          
				}}

        
			/>
		</div>
	);
};
