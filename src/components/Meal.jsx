import React, { useEffect, useState } from 'react'
import MealCart from './MealCart';

const Meal = () => {
  const [meals,setMeals] =useState([]);
  useEffect(() => {
    mealsFetch();
  },[])

  const mealsFetch = async() => {
    const dataMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const {meals} = await dataMeals.json();
    setMeals(meals);
    console.log(meals);
  }
  return (
    <div className=' flex flex-wrap justify-center gap-10 mt-20'> 
      {
        meals?.map(meal => {
          return (
            <MealCart 
              key={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
              id={meal.idMeal}
            />
          );
        })
      }
    </div>
  )
}

export default Meal;
