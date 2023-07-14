import AppBar from "./Components/Appbar";
<<<<<<< HEAD
import HistoryPanel from "./Components/HistoryPanel";
import Editor from "./Components/Editor";
import MenuBar from "./Components/MenuBar";
import UrlPane from "./Components/UrlPane";
import RequestBar from "./Components/RequestBar";
import ResponseBar from "./Components/ResponseBar";
import TabBar from "./Components/TabBar";

import ResizePanel from "react-resize-panel";

function App(props) {
   
  return (
    <>
      <UrlPane mediator={props.mediator}></UrlPane>
      {/* <div className="App">
        <AppBar></AppBar> 
       <TabBar></TabBar>
        <div className="main">
          <MenuBar></MenuBar>
          <Editor>
            
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
      </div>  */}
    </>
=======
import Editor from "./Editor";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Editor></Editor>
    </div>
>>>>>>> main
  );
}

export default App;
