import React, { useEffect, useState } from 'react';

//components
import NewOrders from '../NewOrders/NewOrders';
import Inventory from '../Inventory/Inventory';

//CSS
import './dashboard.css'
//Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Dashboard = () => {

    const [newOrders, setNewOrders] = useState([]);

    const getNewOrder = () => {
        var ws = new WebSocket('ws://localhost:8080/');
        ws.onmessage = function(event) {
        setNewOrders( newOrders => [...newOrders, JSON.parse(event.data)]);
        };
    }

    useEffect(() => {
        getNewOrder()
    },[]);

    return(
        <Container fluid="false">
            <Row>
                <Col>
                    <NewOrders newOrders={newOrders} />         
                </Col>
                <Col id='inventory-container'>
                    <Inventory newOrders={newOrders} />        
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard