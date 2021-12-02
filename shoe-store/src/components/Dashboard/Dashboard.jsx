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

    return(
        <Container fluid="xxl">
            <Row>
                <Col>
                    <NewOrders />         
                </Col>
                <Col>
                    <Inventory />        
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard