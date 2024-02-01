// this component will loop over the ingredients received as a prop from the parent component (BurgerStacker)
// each iteration of the loop will display one clickable component
// this clickable item will be rendered by another component, called Ingredient

import React, { Component } from "react";

export default class IngList extends Component {
    render () {
        console.log('the props in IngList', this.props);

        return (
            <section class="pane">
                <h3>Ingredient List</h3>
            </section>
        );
    }
}