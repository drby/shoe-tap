import React, { useEffect, useState } from 'react';

//components
import InventoryCard from './InventoryCard'

//css
import './css/inventory.css'
//import { GiConsoleController } from 'react-icons/gi';

const Inventory = ({newOrders}) => {
    // https://stackoverflow.com/questions/48568571/increment-value-of-one-element-of-an-json-array-of-objects

    const [stores, setStores] = useState([]);

    useEffect(() => {
        //console.log(newOrders);
        setStores( (newOrders.map(item => item.store)))
        //console.log(stores);
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