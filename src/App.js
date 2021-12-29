import AppBar from "./Components/Appbar";
import HistoryPanel from "./Components/HistoryPanel";
import Editor from "./Components/Editor";
import MenuBar from "./Components/MenuBar";
import UrlPane from "./Components/UrlPane";
import RequestBar from "./Components/RequestBar";
import ResponseBar from "./Components/ResponseBar";

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>

      <div className="main">
        <MenuBar></MenuBar>
        <Editor>
          <UrlPane></UrlPane>
          <div className="viewpage">
            <RequestBar></RequestBar>
            <ResponseBar></ResponseBar>
          </div>
        </Editor>

        <HistoryPanel></HistoryPanel>
      </div>
    </div>
  );
}

export default App;
