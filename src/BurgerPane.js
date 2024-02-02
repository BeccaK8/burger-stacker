// this component will loop over the burgerIngredients received as a prop from the parent component (BurgerStacker)
// each iteration of the loop will display one clickable component
// this clickable item will be rendered by another component, called Ingredient

import Ingredient from "./Ingredient";

const BurgerPane = (props) => {

    // Use destructuring syntax to isolate anything brought in from props
    const { ingredients } = props;
    
    let burgerBits = ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient 
                ingredient={ing}
                clickFunc={props.remove}
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
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    );
};

export default BurgerPane;