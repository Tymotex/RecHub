import React from 'react';

import { Image } from 'react-bootstrap';

// ===== Component Definition =====
const Game = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Image src={props.coverImgURL} fluid />
            <p>{props.description}</p>
        </div>
    );
};

export default Game;
