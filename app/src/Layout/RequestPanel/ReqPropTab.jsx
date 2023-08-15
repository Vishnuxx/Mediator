import { TabContent, TabView } from "../../genericComponents/TabView";
import ParamTab from "./Components/tabs/ParamsTab/ParamTab";
import HeaderTab from "./Components/tabs/HeadersTab/HeadersTab";
import BodyTab from "./Components/tabs/BodyTab/BodyTab";
import AuthorizationTab from "./Components/tabs/AuthorizationTab/AuthorizationTab";

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
			<TabContent label="Tests">Coming soon</TabContent>
		</TabView>
	);
}
