import React from 'react';

const Order = ({ order }) => {
    const {strMeal,strMealThumb,}=order
    console.log(order);
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h1>
                {strMeal}
            </h1> 
        </div>
    );
};

export default Order;