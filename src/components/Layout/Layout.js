// The Layout component is the wrapper of all other main components
// in the project

import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const layout = (props)=> (
    <Aux>
        <div className={classes.Header}>Here the Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;