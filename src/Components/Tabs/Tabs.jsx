import PlusIcon from "@rsuite/icons/Plus";
import MoreIcon from "@rsuite/icons/More";
import { useState } from "react";
import { Button, Container, FlexboxGrid, IconButton, Nav, Stack } from "rsuite";
import ResponsiveNav from "@rsuite/responsive-nav";

const defaultItems = [
  { eventKey: "A", label: "Item A" },
  { eventKey: "B", label: "Item B" },
  { eventKey: "C", label: "Item C" },
  { eventKey: "D", label: "Item D" },
  { eventKey: "E", label: "Item E" },
  { eventKey: "F", label: "Item F" },
];

function Tabs() {
  const [activeKey, setActiveKey] = useState("A");
  const [items, setItems] = useState(defaultItems);
  return (
    <Container
      style={{
        width: "100%",
        overflow: "hidden",
        paddingRight: "50px",
        boxSizing: "border-box",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
        // background:'red'
      }}
    >
      <IconButton
        circle
        size="sm"
        style={{
          width: "30px",
          height: "30px",
        }}
        icon={<PlusIcon />}
        onClick={() => {
          const itemKey = getKey();
          const nextItems = [
            ...items,
            {
              eventKey: itemKey,
              label: `Item ${itemKey}`,
            },
          ];
          setItems(nextItems);
        }}
      ></IconButton>

      <Container style={{ overflow: "scroll", width: "100%" }}>
        <Tabs1 data={sampleData}></Tabs1>
        {/* <ResponsiveNav
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflow: "scroll",
          }}
          removable
          appearance="tabs"
          moreText={<MoreIcon />}
          moreProps={{ noCaret: true }}
          activeKey={activeKey}
          onSelect={setActiveKey}
          onItemRemove={(eventKey) => {
            const nextItems = [...items];
            nextItems.splice(
              nextItems.map((item) => item.eventKey).indexOf(eventKey),
              1
            );
            setItems(nextItems);
            setActiveKey(nextItems[0] ? nextItems[0].eventKey : null);
          }}
        >
          {items.toReversed().map((item) => (
            <ResponsiveNav.Item
              key={item.eventKey}
              eventKey={item.eventKey}
              role="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "300px",
              }}
            > */}
        {/* <Stack style={{ flexDirection: "row", width: "100px" }}> */}
        {/* <p
                id="text"
                style={{
                  color: "#42f5b9",
                  fontWeight: "600",
                  width: "fit-content",
                  fontSize: "11px",
                  marginRight: "8px",
                }}
              >
                POST
              </p>
              <p
                style={{
                  fontWeight: "600",
                  width: "fit-content",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                {item.label}
              </p> */}
        {/* </Stack> */}
        {/* </ResponsiveNav.Item>
          ))}
        </ResponsiveNav> */}
      </Container>
    </Container>
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
