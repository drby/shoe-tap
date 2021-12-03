import React, { useEffect, useState } from 'react';

//css
import './css/inventory.css'

const Inventory = () => {

    const [newOrders, setNewOrders] = useState([]);
    const [storeInventories, setStoreInventories] = useState([]);
    const [test, setTest] = useState({});

    // https://stackoverflow.com/questions/48568571/increment-value-of-one-element-of-an-json-array-of-objects

    const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        console.log(event.data);
        setTest(event.data)
        //setNewOrders( newOrders => [...newOrders, JSON.parse(event.data)]);
        };
        let inventory = [];
        //let newStoreInventory = event.data;
        let temp = inventory.find(order => order.store === test.store);
        if (temp != undefined) {
                temp.inventory+= 1
            } else {
                inventory.push(test)
            }
        setStoreInventories( storeInventories => [...storeInventories, inventory]);
        console.log(storeInventories);
    }

    /* const updateInventory = () => {
        let data = {}
        let temp = newOrders.find(order => order.store === data.id)
        if (!temp) {
                temp.inventory+= 1
            } else {
                temp.push(data)
            }
    } */

    useEffect(() => {
        getNewOrder()
    },[]);

    return(
        <div className="inventory-card-container">
           testing
        </div>
    )
}

export default Inventory