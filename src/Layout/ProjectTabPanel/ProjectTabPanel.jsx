import { useState } from "react";
import {
	BrowserTab,
	BrowserTabView,
} from "../../GenericComponents/BrowserTabView";

function ProjectTabPanel() {
	const [tabs, setTabs] = useState([
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	]);
	const addTab = () => {
		setTabs([...tabs, ""]);
	};

	const removeTab = () => {};
	return (
		<BrowserTabView>
			{tabs.map((tab, i) => {
				return <BrowserTab method="GET" label="untitled"></BrowserTab>;
			})}
		</BrowserTabView>
	);
}

export default ProjectTabPanel;
