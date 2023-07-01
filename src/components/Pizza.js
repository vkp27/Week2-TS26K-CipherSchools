import React from 'react';
import './pizza.css';

// functional Component
// Capital Letter naming convention

let Pizza = (props) => {
    console.log("I am coming from App.js", props);

    // condition ? true : false

    // Conditional Rendering
    let pizzaPlacesList = props.pizzaPlaces.length ? (props.pizzaPlaces.map( (pizzaPlace) => {
        console.log(pizzaPlace);
        return(
          <div className='pizza ' key={pizzaPlace.id}>
            <h1>{pizzaPlace.name.toUpperCase()}</h1>
            <p>{pizzaPlace.description}</p>
            <button onClick={() => {props.deleteCard(pizzaPlace.id)}}>Delete Card</button>
          </div>
        )
    })) : (<p>No data available......</p>)
    
    console.log(pizzaPlacesList);
    return(
      // Always enclose adjacent jsx in a div
      <div>
        {pizzaPlacesList}
      </div>
      
    )
    
}

export default Pizza;