import { useState } from "react";

function ReqPropTab() {
  const tabs = {
    params: "Params",
    headers: "Headers",
    body: "Body",
    authorization: "Authorization",
    tests: "Tests",
  };

  const [selected, setselected] = useState("params");

  return (
    <div className="flex flex-row content-center items-center overflow-x-scroll border-gray-100  no-scrollbar">
      {Object.keys(tabs).map((key, i) => {
        return (
          <Item
            key={i}
            keyid={key}
            text={tabs[key]}
            selected={selected === key}
            onClick={(e, keyid) => setselected(keyid)}
          ></Item>
        );
      })}
    </div>
  );
}

function Item({ keyid, text, selected, onClick }) {
  return (
    <div
      onClick={(e) => onClick(e, keyid)}
      className={`pr-2 pl-2  text-gray-400 cursor-pointer hover:text-gray-300 font-bold text-xs`}
    >
      <p
        className={`${
          selected ? " border-b-2 border-indigo-500 text-gray-100" : ""
        } p-2 box-border`}
      >
        {text}
      </p>
    </div>
  );
}

export default ReqPropTab;
