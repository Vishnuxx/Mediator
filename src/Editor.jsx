import Split from "@uiw/react-split";

import TabView from "./Components/Tabs/Tab1";
import RequestPanel from "./Layout/RequestPanel/RequestPanel";
import AppBar from "./Components/Appbar";
import { getColor } from "./constants/AppColors";

function Editor(props) {
  const background = "#171717";

  return (
    <section className={`w-[100%] h-[100%] flex flex-col`}>
      <AppBar></AppBar>
      <Split className={`bg-[#17171700] h-fill`} renderBar={renderbar}>
        <div className={`w-[250px] min-w-[200px] max-w-[500px] bg-[#171717]`}>
          test
        </div>
        <div
          className={`h-[100%] min-w-[80px]  flex flex-col flex-1 bg-[#171717]`}
        >
          <TabView></TabView>
          <Split mode="horizontal" renderBar={renderbar} className=" h-[100%] ">
            <div className={`h-[100%] w-[100%] bg-[#171717]`}>
              <RequestPanel></RequestPanel>
            </div>
            <div
              // style={{ minWidth: 80, flex: 1 }}
              className={`h-[100%] w-[100%] bg-[#171717]`}
            >
              {/* <RequestPanel></RequestPanel> */}
            </div>
          </Split>
        </div>
      </Split>
    </section>
  );
}

export default Editor;

function style(color) {
  return {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
  };
}

const renderbar = ({ onMouseDown, ...props }) => {
  return (
    <div {...props} style={{ boxShadow: "none", background: "transparent" }}>
      <div
        onMouseDown={onMouseDown}
        style={{
          backgroundColor: getColor("border"),
        }}
      />
    </div>
  );
};
