import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css'
const Meal = () => {
     const [meals, setMeals] = useState([])
     const [cart, setCart] = useState([])
       useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
          .then(res => res.json())
          .then(data => setMeals(data.meals))
       }, [])
     
     const handledBuy = (meal) => {
         setCart(meal)
     }

     return (
          <div className='meals-container'>
               <div className='product-container'>
                     {
                    meals.map(meal => <SingleMeal
                         meal={meal}
                         key={meal.idMeal}
                         handledBuy={handledBuy}
                    ></SingleMeal>)
                      }
              </div>
               <div className='cart-container'>
                    <Cart cart={cart}></Cart>
              </div>
          </div>
     );
};

export default Meal;