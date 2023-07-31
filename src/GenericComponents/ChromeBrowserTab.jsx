import { useState } from "react";

const Tab = ({ active, label, onClick, onClose }) => {
	return (
		<div
			className={`cursor-pointer w-[150px] flex justify-between px-4 py-1 border-r-2 border-green box-border align-center border-r-2 border-transparent ${
				active ? "border-blue-500 text-white font-bold border-t border-1  " : "text-gray-500"
			}`}
			onClick={onClick}
		>
			<p className="align-center">{label}</p>
			{onClose && (
				<span
					className="ml-2 text-md text-red-500 cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
				>
					×
				</span>
			)}
		</div>
	);
};

const BrowserTabView = ({ children }) => {
	return <div className="flex ">{children}</div>;
};

const ChromeBrowserTabs = () => {
	const [tabs, setTabs] = useState([
		{ id: 1, label: "Tab 1" },
		{ id: 2, label: "Tab 2" },
	]);
	const [activeTab, setActiveTab] = useState(tabs[0].id);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	const handleTabClose = (tabId) => {
		if (tabs.length === 1) return; // Don't close last tab
		setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
		setActiveTab(tabs[0].id);
	};

	const handleAddTab = () => {
		const newTabId = Math.max(...tabs.map((tab) => tab.id)) + 1;
		const newTab = { id: newTabId, label: `Tab ${newTabId}` };
		setTabs((prevTabs) => [...prevTabs, newTab]);
		setActiveTab(newTabId);
	};

	const handleTabDragStart = (e, tabId) => {
		e.dataTransfer.setData("tabId", tabId);
	};

	const handleTabDragOver = (e) => {
		e.preventDefault();
	};

	const handleTabDrop = (e, targetTabId) => {
		const sourceTabId = parseInt(e.dataTransfer.getData("tabId"));
		if (sourceTabId !== targetTabId) {
			const tabsCopy = [...tabs];
			const sourceTabIndex = tabsCopy.findIndex(
				(tab) => tab.id === sourceTabId
			);
			const targetTabIndex = tabsCopy.findIndex(
				(tab) => tab.id === targetTabId
			);
			const [sourceTab] = tabsCopy.splice(sourceTabIndex, 1);
			tabsCopy.splice(targetTabIndex, 0, sourceTab);
			setTabs(tabsCopy);
		}
	};

	return (
		<div className="flex flex-col w-full h-full">
			<BrowserTabView>
				{tabs.map((tab) => (
					<div
						key={tab.id}
						className={`relative ${tab.id === activeTab ? "z-10" : "z-0"}`}
						draggable
						onDragStart={(e) => handleTabDragStart(e, tab.id)}
						onDragOver={(e) => handleTabDragOver(e)}
						onDrop={(e) => handleTabDrop(e, tab.id)}
					>
						<Tab
							label={tab.label}
							active={tab.id === activeTab}
							onClick={() => handleTabClick(tab.id)}
							onClose={() => handleTabClose(tab.id)}
						/>
					</div>
				))}
				<button
					onClick={handleAddTab}
					className="px-4 py-2  text-gray-600  hover:text-blue-500"
				>
					+
				</button>
			</BrowserTabView>
			{/* <div className="flex flex-1 p-4 border-t border-gray-300">
				{tabs.find((tab) => tab.id === activeTab) && (
					<div className="w-full h-full p-2 border border-gray-300">
						
						{tabs.find((tab) => tab.id === activeTab).label}
					</div>
				)}
			</div> */}
		</div>
	);
};

export default ChromeBrowserTabs;
