// Toolbar Component represents the tool bar of the page
// it holds the menu and the logo of our app and the navigation list
import React from "react";
import classes from './Toolbar.module.css';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>menu</div>
        <div>logo</div>
        <nav>
            <ul>...</ul>
        </nav>
    </header>
)

export default toolbar;