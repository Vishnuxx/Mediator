function HistoryPanel() {
  let list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 3, 2, 3, 2, 3, 2, 3, 2, 3, 23, 2,
  ];
  return (
    <div>
      <p style={{ marginLeft: "15px" }}>History</p>
      <nav className="history-panel">
        <div style={{ marginBottom: "15px" }}>
          {list.map((list) => {
            return HistoryTile();
          })}
        </div>
      </nav>
    </div>
  );
}

function HistoryTile() {
  return (
    <div
      className="history-tile"
      style={{ display: "flex", flexFlow: "column" }}
    >
      <div style={{ display: "flex", padding: "4px", flexFlow: "row" }}>
        <p
          style={{
            color: "#00AD07",
            display: "flex",
            fontSize: 13,
            margin: 0,
            paddingTop: "4px",
            alignItems: "start",
            width: "100%",
          }}
        >
          hell
        </p>
        <p style={{ fontSize: 10, margin: 5, color: "#FF7A00" }}>GET</p>
        <p style={{ fontSize: 10, margin: 5 }}>200</p>
        <p style={{ fontSize: 10, margin: 5, color: "#BB89EE" }}>10kb</p>
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
