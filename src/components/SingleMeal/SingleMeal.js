import React from 'react';
import './SingleMeal.css'

const SingleMeal = ({ handledBuy ,  meal }) => {
     const {idMeal,  strMeal, strMealThumb, strArea, strCategory} = meal
     return (
          <div className='meal'>
               <img src={strMealThumb } alt="" />
               <div className='meal-info'>
                    <p>Meal ID : { idMeal}</p>
                    <p>Name: {strMeal}</p>
                    <p>Meal Area : {strArea}</p>
                    <p>Catergory: { strCategory}</p>
               </div>
               <button onClick={()=>handledBuy(meal)} className='buy-btn'>
                    <p>About Meals</p>
               </button>
          </div>
     );
};

export default SingleMeal;