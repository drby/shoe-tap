import React from "react";

//icons
import { BsBoxSeam, BsShopWindow } from 'react-icons/bs';
import { MdOutlineStore } from 'react-icons/md';

//css
import './css/newOrderCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const NewOrderCard = ({newOrder}) => {
    return(
        <Card className="order-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className='new-order-text'><BsBoxSeam id='box-icon' /> - model: {newOrder.model} - <BsShopWindow id='store-icon'/> - {newOrder.store}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard