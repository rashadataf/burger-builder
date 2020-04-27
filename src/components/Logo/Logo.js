// the Logo Component represent the logo in the toolbar
import React from "react";
import burgerLogo from "../../assests/images/logo.png";
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt={"my Logo"} />
    </div>
);

export default logo;