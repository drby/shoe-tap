import React, { useEffect, useState } from 'react';

const Dashboard = () => {

    const [order, setOrder] = useState([]);
    
    const socket = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        console.log(event.data);
        setOrder( order => [...order, JSON.parse(event.data)])
        };
    }

    useEffect(() => {
        socket()
    },[])

    return(
        <div>
        {
            order.map(item => <p>new order: {item.store}, inventory is now: {item.inventory}</p>)
        }
            <button onClick={ () => console.log(order)}>see array (test)</button>
        </div>
    )
}

export default Dashboard