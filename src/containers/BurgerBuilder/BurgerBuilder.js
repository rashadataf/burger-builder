// The BurgerBuilder component is the component responsible for
// the creating of our burger
// adding components to it
// cheese, salad, meat, ....
// and display the resulting burger correctly

import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    render() {
        return (
            <Aux>
                <Burger />
                <div>here will be the burger controls where we can add and remove components to our burger</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;