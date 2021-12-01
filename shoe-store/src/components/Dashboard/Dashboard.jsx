import React, { useEffect, useState } from 'react';

//CSS
import './dashboard.css'
//Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

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
        <Container fluid="xxl">
            <Row>
                <Col>
                    <div className="order-card-container">
                        {
                            order.map(item => 
                                <Card border="danger" className="order-card" style={{ width: '18rem' }}>
                                    <Card.Header>New order</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Store: {item.store}</Card.Title>
                                        <Card.Text>
                                            inventory is now: {item.inventory}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>             
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard