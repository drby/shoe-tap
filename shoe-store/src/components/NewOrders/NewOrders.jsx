import React, { useEffect, useState } from 'react';

//components
import NewOrderCard from './NewOrderCard'

//CSS
import './css/newOrders.css'

const NewOrders = ({newOrders}) => {

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