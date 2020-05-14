import React from 'react';

import { Image, Spinner } from 'react-bootstrap';

// ===== Component Definition =====
const Game = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Image src={props.coverImgURL} fluid />
            <p>{props.description}</p>
            <Spinner animation="grow" />
        </div>
    );
};

export default Game;
