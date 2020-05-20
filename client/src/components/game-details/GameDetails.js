import React from 'react';
import { Showcase } from '../showcase';

// Bootstrap components
import { Container } from 'react-bootstrap';

// The 'match' prop contains the route parameters inside the route: /game/:id
const Game = (props) => {
    let { currGameID } = props;
    props.getGameDetails(currGameID);
    return (
        <Container>
            <h1>The ID of the game to be displayed is {currGameID}</h1>
        </Container>
    )
}

export default Game;
