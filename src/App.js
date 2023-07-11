import AppBar from "./Components/Appbar";
import HistoryPanel from "./Components/HistoryPanel";
import Editor from "./Components/Editor";
import MenuBar from "./Components/MenuBar";
import UrlPane from "./Components/UrlPane";



function App() {
  return (
    <div className="App">
      <AppBar></AppBar>

      <div className="main">
        <Editor></Editor>
      </div>
    </div>
  );
}

export default App;
