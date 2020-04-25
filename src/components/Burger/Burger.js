// The Burger component is the responsible for
// the final display of our created burger
import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const burger = (props) => {
    // transform the values coming from the BurgerBuilder Component into array of arrays
    // each array contain the number of desired ingredients
    // to draw them
    const transformedIngredients = Object.keys(props.ingredients).map((inKey)=>{
        return [...Array(props.ingredients[inKey])].map((_,i) => {
            return <BurgerIngredient key={inKey + i} type={inKey} />
        })
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};

export default burger;