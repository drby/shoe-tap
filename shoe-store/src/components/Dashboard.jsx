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
            order.forEach((item) => 
                <p>{item}</p>
        )}
            <button onClick={ () => console.log(order)}>click me</button>
        </div>
    )
}

export default Dashboard