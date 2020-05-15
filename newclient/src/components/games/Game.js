import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import './Game.scss';

// ===== Component Definition =====
const Game = ({ title, description, coverImgURL }) => {
    return (
        <Card className="game-card">
            <Link to="/login"><Card.Img className="game-cover-image" variant="top" src={coverImgURL} /></Link>
            <Card.Body className="game-card-body">
                <Link className="link-no-underline" to="/login"><Card.Title>{title}</Card.Title></Link>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default Game;
