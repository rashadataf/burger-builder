// The BuildControl Component responsible for a single piece of controls
// it contains the label for the control and two buttons with Less and More text inside then
// those buttons responsible for adding and removing ingredients to the final burger
import React from "react";
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}
        >More
        </button>
    </div>
);

export default buildControl;