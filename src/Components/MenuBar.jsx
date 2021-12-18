import React from 'react';
const MenuBar = (props) => {
        return (
            <menu className="menubar">{props.children}</menu>
        );
    }



export default MenuBar;