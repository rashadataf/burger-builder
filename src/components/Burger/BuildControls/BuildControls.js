// The BuildControls Component is responsible for
// wrapping every single control and displaying them
import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

// here we create an array that holds the values
// for the controls we have
// label: the text will be display as the label of the control
// type: is the value will be passed throughout Components
// so that the logic we created earlier will be accomplished
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;