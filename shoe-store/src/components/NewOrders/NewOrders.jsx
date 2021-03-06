import React from 'react';

//components
import NewOrderCard from './NewOrderCard'

//CSS
import './css/newOrders.css'

const NewOrders = ({newOrders}) => {

    return(
        <>
            <h2>Incoming orders</h2>
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