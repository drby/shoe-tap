import React from "react";

//icons
import { BsBoxSeam } from 'react-icons/bs';

//css
import './css/newOrderCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const NewOrderCard = ({newOrder}) => {
    return(
        <Card className="order-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text><BsBoxSeam /> Model: {newOrder.model} store: {newOrder.store}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard