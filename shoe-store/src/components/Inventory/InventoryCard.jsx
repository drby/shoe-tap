import React from "react";

//css
import './css/inventoryCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const Inventorycard = ({inventory}) => {
    return(
        <Card className="inventory-card" style={{ width: '18rem' }}>
            <Card.Header>{inventory.store}</Card.Header>
            <Card.Body>
                <Card.Text>Model: {inventory.model}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Inventorycard