import React from "react";

//Bootstrap
import Card from 'react-bootstrap/Card'

const NewOrderCard = ({newOrder}) => {
    return(
        <Card border="danger" className="order-card" style={{ width: '18rem' }}>
            <Card.Header>New order</Card.Header>
            <Card.Body>
                <Card.Title>Model: {newOrder.model}</Card.Title>
                <Card.Text>
                    Store: {newOrder.store}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard