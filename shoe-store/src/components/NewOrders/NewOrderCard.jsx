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
                <Card.Text className='new-order-text'><div><BsBoxSeam id='box-icon' /> - {newOrder.store} </div><div><GiConverseShoe /> {newOrder.model}</div><div>time</div></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewOrderCard