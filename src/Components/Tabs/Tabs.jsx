import PlusIcon from "@rsuite/icons/Plus";
import MoreIcon from "@rsuite/icons/More";
import { useState } from "react";
import { Button, Container, FlexboxGrid, IconButton, Nav, Stack } from "rsuite";
import ResponsiveNav from "@rsuite/responsive-nav";
import { TabView } from "primereact/tabview";
import { TabPanel } from "@chakra-ui/react";

const defaultItems = [
  { eventKey: "A", label: "Item A" },
  { eventKey: "B", label: "Item B" },
  { eventKey: "C", label: "Item C" },
  { eventKey: "D", label: "Item D" },
  { eventKey: "E", label: "Item E" },
  { eventKey: "F", label: "Item F" },
];
const tabs = Array.from({ length: 50 }, (_, i) => ({
  title: `Tab ${i + 1}`,
  content: `Tab ${i + 1} Content`,
}));
function Tabs() {
  const [activeKey, setActiveKey] = useState("A");
  const [items, setItems] = useState(defaultItems);

  return (
    
    <TabView  scrollable>
      {tabs.map((tab) => {
        return (
          <TabPanel key={tab.title} header={tab.title}>
            <p className="m-0">{tab.content}</p>
          </TabPanel>
        );
      })}
    </TabView>
  );
}

export default Tabs;

function getKey() {
  return (Math.random() * 1e18).toString(36).slice(0, 5).toUpperCase() + "";
}

const sampleData = [
  {
    title: "title1",
    method: "POST",
    id: getKey(),
  },
  {
    title: "title1",
    method: "POST",
    id: getKey(),
  },
  {
    title: "title1",
    method: "POST",
    id: getKey(),
  },
  {
    title: "title1",
    method: "POST",
    id: getKey(),
  },
  {
    title: "title1",
    method: "POST",
    id: getKey(),
  },
];

export function Tabs1({ style, data }) {
  return (
    <div
      style={{
        background: "green",
        display: "flex",
        flexFlow: "row",
        ...style,
      }}
    >
      {sampleData.map((d, i) => {
        return (
          <Tab key={i} title={data.title} type={data.type} id={data.id}></Tab>
        );
      })}
    </div>
  );
}

function Tab({ title, type, id, onClick, isSelected }) {
  return (
    <div
      onClick={(e) => onClick(e, id)}
      style={{
        background: "red",
        minWidth: "200px",
        borderRadius: "5px 5px 0 0",
        border: isSelected ? "1px solid gray" : "",
        color: "white",
      }}
    >
      <p
        id="text"
        style={{
          color: "#42f5b9",
          fontWeight: "600",
          width: "fit-content",
          fontSize: "11px",
          marginRight: "8px",
        }}
      >
        {type}
      </p>
      <p
        style={{
          fontWeight: "600",
          width: "fit-content",
          fontSize: "13px",
          margin: 0,
        }}
      >
        {title}
      </p>
    </div>
  );
}
