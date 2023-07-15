import { Children, useState } from "react";

//  const tabs = {
//    params: "Params",
//    headers: "Headers",
//    body: "Body",
//    authorization: "Authorization",
//    tests: "Tests",
//  };

//  const [selected, setselected] = useState("params");

function ReqPropTab({className ,  children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };



  return (
    <div className={className}>
      <div className="flex flex-row content-center items-center overflow-x-scroll border-gray-100  no-scrollbar">
        {/* {Object.keys(tabs).map((key, i) => {
        return (
          <Item
            key={i}
            keyid={key}
            text={tabs[key]}
            selected={selected === key}
            onClick={(e, keyid) => setselected(keyid)}
          ></Item>
        );
      })} */}

        {Children.map(children, (child, index) => {
          return (
            <div
              className={`py-2 px-4 text-gray-300 cursor-pointer ${
                activeTab === index ? "border-b-2 border-indigo-500" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {child.props.label}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row content-center items-center overflow-x-scroll border-gray-100  no-scrollbar">
        {/* {Object.keys(tabs).map((key, i) => {
        return (
          <Item
            key={i}
            keyid={key}
            text={tabs[key]}
            selected={selected === key}
            onClick={(e, keyid) => setselected(keyid)}
          ></Item>
        );
      })} */}

        {Children.map(children, (child, index) => {
          if (activeTab === index) return (
            <>
              {child}
            </>
          ); 
        })}
      </div>
    </div>
  );
}

export function Item({ label ,  children}) {
  return (
    <>
      {children}
    </>
  );
}



export default ReqPropTab;
