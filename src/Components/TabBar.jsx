import { Label, Pane } from "evergreen-ui";

function TabBar() {
    return <Pane display="flex">
        <Tab>
            Tab1
        </Tab>
        <Tab>
            Tab2
        </Tab>
        <Tab>
            Tab3
        </Tab>
        <Tab>
            Tab4
        </Tab>
        <Tab>
            Tab5
        </Tab>
    </Pane>
}

function  Tab(props){
    return (
      <Pane
        display="flex"
        width="100px"
        height="40px"
        alignItems="center"
        justifyContent="space-around"
      >
        <Label>{props.children}</Label>
        <p>x</p>
      </Pane>
    );
}

export default TabBar;