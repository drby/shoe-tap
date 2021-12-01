import React, { useEffect, useState } from 'react';

//CSS
import './dashboard.css'
//Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Dashboard = () => {

    const [order, setOrder] = useState([]);
    
    const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        console.log(event.data);
        setOrder( order => [...order, JSON.parse(event.data)])
        };
    }

    useEffect(() => {
        getNewOrder()
    },[])

    return(
        <Container fluid="md">
            <Row>
                <Col>             
                    {
                        order.map(item => <p>new order: {item.store}, inventory is now: {item.inventory}</p>)
                    }
                    <button onClick={ () => console.log(order) }>see array (test)</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard