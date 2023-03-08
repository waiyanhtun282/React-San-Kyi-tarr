import React from 'react';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './MealCart.css';


const MealCart = ({name,image,id}) => {
  return (
    <div className="relative parent">
      <img src={image} alt="" className="w-[300px] image rounded-lg" />
      <Link to={`/detail/${id}`}>
        <p className=" bg-orange-500 w-12 h-12 rounded-[100%] flex justify-center items-center absolute top-[40%] left-[40%] icon ">
          <BiSearch className=" text-3xl  text-white " />
        </p>
      </Link>
    </div>
  );
}

export default MealCart
