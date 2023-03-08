import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsYoutube} from 'react-icons/bs';

const Detail = () => {
  const {id} = useParams();
  const [meals,setMeals] = useState({});
  
  useEffect(() => {
     fetchMeal();
  },[])
  
  const fetchMeal =async() => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
     setMeals(meals[0]);
     console.log(meals);
  }
  return (
    <div className=" h-screen flex items-center">
      <div className=" flex max-w-[80%]  mx-auto p-5 items-center gap-16 border shadow-md rounded-lg bg-[#2f234b] overflow-hidden">
        <img
          src={meals.strMealThumb}
          alt=""
          className=" h-[400px] rounded-full object-cover"
        />
        <div className="text-[#f74a8a] space-y-2">
          <h2 className=" text-2xl  font-semibold tracking-wide mb-3">
            {meals.strMeal}
          </h2>
          <h2 className="text-lg text-yellow-500  font-semibold tracking-wide">
            {meals.strArea}
          </h2>
          <p className="  text-lime-500 tracking-wide">{meals.strCategory}</p>
          <p className=" tracking-wide text-white max-h-[250px] overflow-hidden">{meals.strInstructions}</p>
          <a href={meals.strYoutube}>
            <BsYoutube className="text-4xl text-red-500 mt-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detail;
