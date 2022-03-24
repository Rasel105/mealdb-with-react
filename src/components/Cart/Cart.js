import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
     console.log(cart)
     return (
          <div className='cart-display'>
               <h2 style={{textAlign:"center"}}>Meal Details</h2>
               <div>
                    <img src={cart.strMealThumb} alt="" />
               </div>
               <div className='meal-info'>
                    <p>Meal ID: {cart.idMeal}</p>
                    <p>Name: {cart.strMeal}</p>
                    <p>Meal Area: {cart.strArea}</p>
                    <p>Category: {cart.strCategory}</p>
                    <p>Measure: {cart.strMeasure1}</p>
                    <p>Instrction: {cart.strInstructions ? cart.strInstructions.slice(0, 50): cart.strInstructions}</p>
               </div>
          </div>
     );
};

export default Cart;