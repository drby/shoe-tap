import React from "react";

//css
import './css/newOrderCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const NewOrderCard = ({newOrder}) => {
    return(
        <Card className="order-card" style={{ width: '18rem' }}>
            <Card.Header>{newOrder.store}</Card.Header>
            <Card.Body>
                <Card.Text>Model: {newOrder.model}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard