import React, { useEffect, useState } from 'react';

//components
import InventoryCard from './InventoryCard'

//css
import './css/inventory.css'
//import { GiConsoleController } from 'react-icons/gi';

const Inventory = ({newOrders}) => {

    const [obj, setObj] = useState({});

    useEffect(() => {
        setObj(newOrders.reduce(function (x,y) {
            x[y.store] = x[y.store] || [];
            x[y.store].push(y)
            return x
        }, Object.create(null)));
    },[newOrders]);

    return(
        <>
            <h2>Overall stock</h2>
            <div className="inventory-card-container">
                {
                    Object.keys(obj).map((key, index) => 
                        <InventoryCard key={index} inventory={key} models={obj[key]}/>
                    )
                }
            </div>
        </>
    )
}

export default Inventory