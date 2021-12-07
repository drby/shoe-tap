import React, { useEffect, useState } from 'react';

//components
import InventoryCard from './InventoryCard'

//css
import './css/inventory.css'
//import { GiConsoleController } from 'react-icons/gi';

const Inventory = ({newOrders}) => {
    // https://stackoverflow.com/questions/48568571/increment-value-of-one-element-of-an-json-array-of-objects

    const [stores, setStores] = useState([]);
    const [obj, setObj] = useState({});

    useEffect(() => {
        //console.log(newOrders);
        setStores((newOrders.map(item => item.store)))
        //console.log(stores);
        //setObj((newOrders.map(order => order.store)).reduce((obj, data) => ( obj[data] = {} ,obj),{}) );
        setObj(newOrders.reduce(function (x,y) {
            x[y.store] = x[y.store] || [];
            x[y.store].push(y)
            return x
        }, Object.create(null)));
        console.log(obj);
    },[newOrders]);

    return(
        <div className="inventory-card-container">
           {
                stores.map((store, index) => 
                    <InventoryCard key={index} inventory={store}/>
                )
            }
        </div>
    )
}

export default Inventory