import React, { useEffect, useState } from 'react';

//components
import InventoryCard from './InventoryCard'

//css
import './css/inventory.css'
import { GiConsoleController } from 'react-icons/gi';

const Inventory = ({newOrders}) => {
    // https://stackoverflow.com/questions/48568571/increment-value-of-one-element-of-an-json-array-of-objects

    const [stores, setStores] = useState([]);

    const testObj = [
        {
            model: 'test',
            store: 'test'
        },
        {
            model: 'test',
            store: 'test'
        },
        {
            model: 'test',
            store: 'test'
        },
        {
            model: 'test',
            store: 'test'
        },
        {
            model: 'test',
            store: 'test'
        },
        {
            model: 'test',
            store: 'test'
        }
    ]
    
/*     const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
            let temp = stock.find(e => e.store === event.data.store)
            if (!temp) { 
                setStock( stock => [...stock.inventory, JSON.parse(event.data.inventory)]);
            } else {
                setStock( stock => [...stock, JSON.parse(event.data)]);
            }
            console.log(stock)
        }
    } */

    useEffect(() => {
        console.log(newOrders);
        //let storeNames = [];
        newOrders.map(order =>  setStores( stores => [...stores, order.store]))
        //setStores( stores => [...stores, storeNames])
        //console.log(stores);
    },[newOrders]);

    return(
        <div className="inventory-card-container">
           {
                stores.map(store => 
                    <InventoryCard inventory={store}/>
                )
            }
        </div>
    )
}

export default Inventory