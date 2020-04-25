// The BurgerBuilder component is the component responsible for
// the creating of our burger
// adding components to it
// cheese, salad, meat, ....
// and display the resulting burger correctly

import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    // the state for managing adding ingredients dynamically
    // and passing them to the burger Component to draw them
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>here will be the burger controls where we can add and remove components to our burger</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;