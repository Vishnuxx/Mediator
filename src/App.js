import AppBar from "./Components/Appbar";
import HistoryPanel from "./Components/HistoryPanel";
import Editor from "./Components/Editor";
import MenuBar from "./Components/MenuBar";
import UrlPane from "./Components/UrlPane";
import RequestBar from "./Components/RequestBar";
import ResponseBar from "./Components/ResponseBar";
import TabBar from "./Components/TabBar";
import { mergeTheme, ThemeProvider } from "evergreen-ui";
import ResizePanel from "react-resize-panel";

function App(props) {
   const theme = mergeTheme("defaultTheme", {
     components: {
       Button: {
         appearances: {
           default: {
             color: "white",
             paddingX: 12,
             paddingY: 8,
             borderRadius: "5px",
             backgroundColor: "#319520",
             _hover: {
               backgroundColor: "#3c952d",
             },
             _active: {
               backgroundColor: "#319520",
             },
             _focus: {},
           },
         },
       },
       Input: {
         appearances: {
           default: {
             color: "white",
             paddingX: 12,
             paddingY: 8,
             borderRadius: "5px",
             backgroundColor: "#319520",
             _hover: {
               backgroundColor: "#3c952d",
             },
             _active: {
               backgroundColor: "#319520",
             },
             _focus: {},
           },
         },
       },
     },
   });

  return (
    <ThemeProvider value={theme}>
      <div className="App">
        <AppBar></AppBar>
        <TabBar></TabBar>
        <div className="main">
          {/* <MenuBar></MenuBar> */}
          <Editor>
            <UrlPane mediator={props.mediator}></UrlPane>
            <div className="viewpage">
              <RequestBar></RequestBar>
              <ResponseBar mediator={props.mediator}></ResponseBar>

              <ResizePanel direction="e">
                <div className="panel sidebar">left panel</div>
              </ResizePanel>
            </div>
          </Editor>

          <HistoryPanel></HistoryPanel>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
