import React from "react";

//icons
import { GiHandTruck } from 'react-icons/gi';
import { FaStoreAlt } from 'react-icons/fa';

//css
import './css/inventoryCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const Inventorycard = ({inventory}) => {
    return(
        <Card className="inventory-card" style={{ width: '18rem' }}>
            <Card.Header>< FaStoreAlt/> - {inventory}</Card.Header>
            <Card.Body>
                <Card.Text>Model: </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Inventorycard