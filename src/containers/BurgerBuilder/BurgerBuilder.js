// The BurgerBuilder component is the component responsible for
// the creating of our burger
// adding components to it
// cheese, salad, meat, ....
// and display the resulting burger correctly
import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

// a list to handle the prices of the ingredients
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // the state for managing adding ingredients dynamically
    // and passing them to the burger Component to draw them
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        // a state to handle the final price of the burger
        totalPrice: 0
    }

    // a function to add ingredients and increase the number of it in the state
    addIngredientHandler = (type) => {
        //    bring the old number of ingredient an state
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //    bring the price we will add to the total price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        //    Update the state in our class with the new information
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    };

    // a function to remove ingredients and decrease the number of it in the state
    removeIngredientHandler = (type) => {
        //    bring the old number of ingredient an state
        const oldCount = this.state.ingredients[type];
        // if the count of ingredient = 0
        // dont do any thing just return
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //    bring the price we will add to the total price
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        //    Update the state in our class with the new information
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    };

    render() {
        // decide where to disable the button of less or not
        // bring the state of ingredients we have
        const disabledInfo = {
            ...this.state.ingredients
        };
        // convert the prior object into another which contain a values of true or false
        // if the amount of ingredient <=0 then it will be replaced in the newly created object by true
        // otherwise false
        // and we will pass this new object to the BuildControls Component which will pass it to the BuildControl Component
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        ;
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;