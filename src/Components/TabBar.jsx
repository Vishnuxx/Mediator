function TabBar() {
    return <div className="tab-bar">
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
    </div>
}

function  Tab(props){
    return <div className="tab" >
        {props.children}
    </div>
}

export default TabBar;