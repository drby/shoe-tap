import React from 'react';

const Dashboard = () => {
    
    var ws = new WebSocket('ws://localhost:8080/');
    ws.onmessage = function(event) {
    console.log(event.data);
    };

    return(
        <h1>dash</h1>
    )
}

export default Dashboard