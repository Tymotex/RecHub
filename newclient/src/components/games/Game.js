import React from 'react';

import { Card } from 'react-bootstrap';

// ===== Component Definition =====
const Game = ({ title, description, coverImgURL }) => {
    return (
        <Card>
            <Card.Img variant="top" src={coverImgURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default Game;
