// This component responsible for adding the ingredients to the burger
// which mean here the salad, cheese, ... will be added to the burger
import React, {Component} from "react";
import classes from "./BurgerIngredients.module.css";
import PropTypes from 'prop-types';

class BurgerIngredient extends Component{
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
        }
        return ingredient;
    }
};
// adding the prop-types package that allow me to inform the user of my code
// each property what the type of it
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;