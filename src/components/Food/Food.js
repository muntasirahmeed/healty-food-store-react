import React from 'react';
import {  ShoppingCartIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from 'react-router-dom';
const Food = ({food}) => {
    const { idMeal,strMeal, strMealThumb } = food;
    const mealName =(strMeal <= 15) ?  strMeal: strMeal.slice(0,15);
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/order/${idMeal}`)
    }
    return (
        <div className='w-[300px] h-[415px] bg-white shadow-lg flex flex-col items-center mx-auto rounded-xl'>
            <img className='w-[280px] m-3 h-[290px] rounded-xl' src={strMealThumb} alt="" />
            <h2 className='mx-3 text-2xl mb-3 '>{mealName.toUpperCase()}</h2>
             <button onClick={handleNavigate} className="bg-[#799F23] font-normal text-white py-1 text-md px-6 rounded hover:bg-lime-700 duration-300 ease-in-out flex  items-center ">
                Add to Cart <span className='ml-2 '><ShoppingCartIcon className='w-4'></ShoppingCartIcon></span>
            </button>
        </div>
    );
};

export default Food;