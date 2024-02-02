// this component will loop over the burgerIngredients received as a prop from the parent component (BurgerStacker)
// each iteration of the loop will display one clickable component
// this clickable item will be rendered by another component, called Ingredient

import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
    render () {
        //console.log('the props in BurgerPane', this.props);
        // Use destructuring syntax to isolate anything brought in from props
        const { ingredients } = this.props;
        
        let burgerBits = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    ingredient={ing}
                    clickFunc={this.props.remove}
                    itemKey={i}
                />
            </li>
        ));
        return (
            <section class="pane">
                <h3>Burger Stack</h3>
                <ul>
                    { burgerBits }
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        );
    }
}