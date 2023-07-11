
import {  Container, Stack } from "rsuite";
import Tabs from "./Tabs/Tabs";
import UrlPane from "./UrlPane";
import MenuBar from "./MenuBar";
import HistoryPanel from "./HistoryPanel";

function Editor(props) {

    return (
      <section className="editor">
        
        <Container style={{alignItems:"start" , flexDirection:"row"}}>
          {/* <HistoryPanel></HistoryPanel> */}
          <Container style={{flexDirection:"column" , width:"100%"}}>
            <Tabs></Tabs>
            <UrlPane />
          </Container>
        </Container>

        {/* <MenuBar></MenuBar>
         */}
      </section>
    );

}

export default Editor;