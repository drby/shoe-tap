import React, { useEffect, useState } from 'react';

//components
import NewOrders from '../NewOrders/NewOrders';

//CSS
import './dashboard.css'
//Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Dashboard = () => {

    return(
        <Container fluid="xxl">
            <Row>
                <Col>
                    <div className="order-card-container">
                        <NewOrders />
                    </div>          
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard