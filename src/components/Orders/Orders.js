import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from '../Order/Order';

const Orders = () => {
    const { id } = useParams()
    const [orders, setOrder] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data.meals))

    }, [id])
    return (
        <div>
            <h1>hello</h1>
            {orders.map(order =><Order key={order.idMeal} order={order}></Order>)}
        </div>
    );
};

export default Orders;