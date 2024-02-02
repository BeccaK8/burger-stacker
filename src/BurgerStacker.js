import React, { useState } from "react";
import BurgerPane from "./BurgerPane";
import IngList from "./IngList";

// First thing when converting from class components to function components 
// is identify what needs to be a state hook and what doesn't
// Helpful to run a find for 'setState' and identify everything that setState interacts with
// In this app, it's just the burgerIngredients, not the original ingredients array
// Then we need to analyze the differences in syntax between classes and functions
// which means remove all references to 'this', 'this.state', etc.
// Then our render() method will go away and be replaced with a return from the function component
// Look for 'props' with a find and if it's not there, no need to add props as a param

const BurgerStacker = () => {

    
    // piece of state that's not really updated
    // so it doesn't need to be converted to hook
    const ingredients = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'},
    ];

    // really the only state we have
    // needs to be setup as a hook
    // burgerIngredients: []
    // we'll use useState to set up the hook, and give a starting value
    // the parts of the useState hook, for reference, are:
    // const [ nameOfPieceOfState, updaterFunction ] = useState(initialValue)
    const [ burgerIngredients, setBurgerIngredients ] = useState([]);

    const addToStack = (evt) => {
        const ingName = evt.target.innerText;
        const ingColor = evt.target.style.backgroundColor;

        console.log(` clicked ${ingName} and it is ${ingColor}`);
        // the old way of updating state with classes: 
        // this.setState({
        //     burgerIngredients: [{ name: ingName, color: ingColor}, ...this.state.burgerIngredients]
        // });

        // instead, with function components, we use the updaterFunction initialized by useState
        setBurgerIngredients(
            [{ name: ingName, color: ingColor}, ...burgerIngredients]
        );
    };

    const removeFromStack = (evt) => {
        const clickIndex = evt.target.id;
        const currBurger = burgerIngredients.slice();
        currBurger.splice(clickIndex, 1);
        
        setBurgerIngredients(currBurger);
    };

    const clearBurger = () => {
        setBurgerIngredients([]);
    };

    // we identify the opening and closing curlies for the render method
    // delete the closing curly, then delete the line with render() {
    // finally, fix indentation
    //render () {}

    // after that, look through return and identify anything that needs to change
    // that means, references to 'this', references to 'state' and anything else we got rid of
    return (
        <>
            <h1>Burger Stacker</h1>
            <div class="panes">
                <IngList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear={clearBurger}
                />
            </div>
        </>
    );
}

export default BurgerStacker;