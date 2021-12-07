import React from 'react';

//components
import NewOrderCard from './NewOrderCard'

//CSS
import './css/newOrders.css'

const NewOrders = ({newOrders}) => {

    return(
        <>
            <h1>Incoming orders</h1>
            <div className="order-card-container">
                {
                    newOrders.map((newOrder, index) => 
                        <NewOrderCard key={index} newOrder={newOrder}/>
                    )
                }
            </div>
        </>
        
    )
}

export default NewOrders