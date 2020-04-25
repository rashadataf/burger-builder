// The Burger component is the responsible for
// the final display of our created burger
import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const burger = (props) => {
    // transform the values coming from the BurgerBuilder Component into array
    // each array contain the number of desired ingredients
    // to draw them
    let transformedIngredients = Object.keys(props.ingredients).map((inKey)=>{
        return [...Array(props.ingredients[inKey])].map((_,i) => {
            return <BurgerIngredient key={inKey + i} type={inKey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    // check the length of the array of ingredients coming from BurgerBuilder
    // if it's equal to 0 then show the below message
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};

export default burger;