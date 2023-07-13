import AppBar from "./Components/Appbar";
import Editor from "./Components/Editor";




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
