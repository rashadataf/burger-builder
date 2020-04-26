// a component which responsible of displaying information about the order we made
// before heading over to the checkout process
import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType={"Danger"} clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummery;