import React from 'react';
import useFoods from '../../hooks/useFoods';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useFoods();
    return (
        <div className='my-5 mx-10'>
            <h1 className='text-2xl mb-10 md:text-3xl text-center font-semibold text-[#799F23] '>AVAILABE FOOD IN STORE</h1>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 max-w-[1440px] justify-center mx-auto">
          {foods.map(food => <Food key={food.idMeal} food={food}></Food>)}
        </div>
            
        </div>
    );
};

export default Foods;