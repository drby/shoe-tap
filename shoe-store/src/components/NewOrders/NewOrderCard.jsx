import React from "react";

//icons
import { BsBoxSeam } from 'react-icons/bs';
import { GiConverseShoe } from 'react-icons/gi';

//css
import './css/newOrderCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const NewOrderCard = ({newOrder}) => {
    return(
        <Card className="order-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className='new-order-text' as="div"><div><BsBoxSeam id='box-icon' /> - {newOrder.store} </div><div>{newOrder.model} - <GiConverseShoe /></div></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard