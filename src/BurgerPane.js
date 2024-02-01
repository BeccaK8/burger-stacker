// this component will loop over the burgerIngredients received as a prop from the parent component (BurgerStacker)
// each iteration of the loop will display one clickable component
// this clickable item will be rendered by another component, called Ingredient

import React, { Component } from "react";

export default class BurgerPane extends Component {
    render () {
        console.log('the props in BurgerPane', this.props);

        return (
            <section class="pane">
                <h3>Burger Stack</h3>
            </section>
        );
    }
}