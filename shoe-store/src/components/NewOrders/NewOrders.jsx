import React, { useEffect, useState } from 'react';

//components
import NewOrderCard from './NewOrderCard'

//CSS
import './css/newOrders.css'

const NewOrders = () => {
    const [newOrders, setNewOrders] = useState([]);
    
    const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        console.log(event.data);
        setNewOrders( newOrders => [...newOrders, JSON.parse(event.data)])
        };
    }

    useEffect(() => {
        getNewOrder()
    },[])

    return(
        <div className="order-card-container">
            {
                newOrders.map(newOrder => 
                    <NewOrderCard newOrder={newOrder}/>
                )
            }
        </div>
    )
}

export default NewOrders