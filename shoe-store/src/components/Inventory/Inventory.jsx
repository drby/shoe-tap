import React, { useEffect, useState } from 'react';

//components
import InventoryCard from './InventoryCard'

//css
import './css/inventory.css'

const Inventory = () => {
    // https://stackoverflow.com/questions/48568571/increment-value-of-one-element-of-an-json-array-of-objects

    const [newOrders, setNewOrders] = useState([]);

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
    

    const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        //console.log(event.data);
        setNewOrders( newOrders => [...newOrders, JSON.parse(event.data)]);
        };
    }

    useEffect(() => {
        getNewOrder()
    },[]);

    useEffect(() => {
        getNewOrder()
    },[]);

    return(
        <div className="inventory-card-container">
           {
                testObj.map(obj => 
                    <InventoryCard inventory={obj}/>
                )
            }
        </div>
    )
}

export default Inventory