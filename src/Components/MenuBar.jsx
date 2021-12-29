import React from 'react';

function MenuBar(props) {
        return (
            <menu className="menubar">{props.children}</menu>
        );
    }



export default MenuBar;