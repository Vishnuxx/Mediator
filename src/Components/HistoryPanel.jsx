function HistoryPanel(props) {
  
  let history = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 3, 2, 3, 2, 3, 2, 3, 2, 3, 23, 2,
  ];
  return (
    <div>
      <p style={{ marginLeft: "15px" }}>History</p>
      <nav className="history-panel">
        <div style={{ marginBottom: "15px" }}>
          {history.map((item , index) => {
            return <HistoryTile key={index}/>
          })}
        </div>
      </nav>
    </div>
  );
}

function HistoryTile(props) {
  return (
    <div className="history-tile" key={props.index}>
      <div className= "sub1">
        <p className="leading-text"> hello </p>
        <p className="history-tile-items" style={{color: "#FF7A00" }}>GET</p>
        <p className="history-tile-items">200</p>
        <p className="history-tile-items" style={{color: "#BB89EE" }}>10kb</p>
      </div>

      <div style={{ display: "flex", paddingLeft: "0px" }}>
        <p
          style={{
            fontSize: 10,
            marginLeft: 5,
            width: "100%",
            textAlign: "start",
            color: "#838383",
          }}
        >
          hellp
        </p>
      </div>
    </div>
  );
}

export default HistoryPanel;
