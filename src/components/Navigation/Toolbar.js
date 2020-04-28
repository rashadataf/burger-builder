// Toolbar Component represents the tool bar of the page
// it holds the menu and the logo of our app and the navigation list
import React from "react";
import Logo from "../Logo/Logo";
import classes from './Toolbar.module.css';
import NavigationItems from "./NavigationItems/NavigationItems";

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>menu</div>
        <Logo></Logo>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;