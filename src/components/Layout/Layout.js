// The Layout component is the wrapper of all other main components
// in the project

import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";

const layout = (props)=> (
    <Aux>
        <div className={classes.Header}>
            <Toolbar />
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;