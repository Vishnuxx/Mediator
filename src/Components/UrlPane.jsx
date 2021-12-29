import TabBar from "./TabBar";



function UrlPane() {
    return (
        <div>
            <div className="Url-pane">
            <select name="req-type" id="req-type">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="UPDATE">UPDATE</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input type="url" className="url-input" placeholder="Enter a url eg: https://google.com" />
            <button className="btn-send">
                Send
            </button>
            
        </div>
        <TabBar></TabBar>
        </div>
        
    );
}

export default UrlPane;