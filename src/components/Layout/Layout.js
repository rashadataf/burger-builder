// The Layout component is the wrapper of all other main components
// in the project

import React from "react";
import Aux from "../../hoc/Aux";

const layout = (props)=> (
    <Aux>
        <div>Here the Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;