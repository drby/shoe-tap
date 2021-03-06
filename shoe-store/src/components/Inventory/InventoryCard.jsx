import React from "react";

//icons
import { FaStoreAlt } from 'react-icons/fa';

//css
import './css/inventoryCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const Inventorycard = ({inventory, models}) => {
    return(
        <Card className="inventory-card" style={{ width: '18rem' }}>
            <Card.Header>< FaStoreAlt/> - {inventory}</Card.Header>
            <Card.Body as='div' className='model-container'>
            {
                models.map((model, index) => <Card.Text as='div' className='model-card' key={index}>{model.model}: {model.inventory}</Card.Text>)
            }
                
            </Card.Body>
        </Card>
    )
}

export default Inventorycard