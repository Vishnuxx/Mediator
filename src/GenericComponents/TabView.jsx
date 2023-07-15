import { Children, useEffect, useState } from "react";

export function TabView({
  className,
  children,
  activeBorderColor = "#6366f1",
  activeIndex = 0,
  onTabChanged = (index) => {},
}) {
  const [activeTab, setActiveTab] = useState(activeIndex);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    onTabChanged(activeTab);
  }, [activeTab]);

  return (
    <div className={className}>
      <div className="flex flex-row content-center items-center overflow-x-scroll border-gray-100  no-scrollbar">
        {Children.map(children, (child, index) => {
          return (
            <div
              style={{
                color: activeTab === index ? "white" : "",
                borderBottom: activeTab === index ? `2px solid ${activeBorderColor}` : "",
              }}
              className={`py-2 px-4 font-semibold text-sm text-gray-400 cursor-pointer`}
              onClick={() => handleTabClick(index)}
            >
              {child.props.label}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row content-center items-center overflow-x-scroll border-gray-100  no-scrollbar">
        {Children.map(children, (child, index) => {
          if (activeTab === index) return <>{child}</>;
        })}
      </div>
    </div>
  );
}

export function TabContent({ label, children }) {
  return <>{children}</>;
}
