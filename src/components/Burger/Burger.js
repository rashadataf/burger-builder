// The Burger component is the responsible for
// the final display of our created burger
import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            <BurgerIngredient type={"salad"} />
            <BurgerIngredient type={"cheese"} />
            <BurgerIngredient type={"cheese"} />
            <BurgerIngredient type={"meat"} />
            <BurgerIngredient type={"bacon"} />
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};

export default burger;