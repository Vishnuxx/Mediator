// import { Children, useState } from "react";

import { useEffect, useState } from "react";
import TableComponent from "../../../Components/ReqPropsTab/Table";
import { TabContent, TabView } from "../../../GenericComponents/TabView";
import TableView from "../../../GenericComponents/TableView";
import ParamTab from "./tabs/ParamTab";
import HeaderTab from "./tabs/HeadersTab";
import BodyTab from "./tabs/BodyTab";
import AuthorizationTab from "./tabs/AuthorizationTab";

export function ReqPropTab() {
	return (
		<TabView className="px-2 py-2   flex w-full flex-col h-full box-border overflow-scroll">
			<TabContent label="Parameters">
				<ParamTab></ParamTab>
			</TabContent>
			<TabContent label="Body">
				<BodyTab></BodyTab>
			</TabContent>
			<TabContent label="Headers">
				<HeaderTab></HeaderTab>
			</TabContent>
			<TabContent label="Authorization">
				<AuthorizationTab></AuthorizationTab>
			</TabContent>
			<TabContent label="Tests">Tests</TabContent>
		</TabView>
	);
}
