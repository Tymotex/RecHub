import React from 'react';
import PageTemplate from '../components/PageTemplate';

// Bootstrap components
import { Container } from 'react-bootstrap';

// The 'match' prop contains the route parameters inside the route: /game/:id
const Game = ({ match }) => {
    console.log("Hit");
    return (
        <PageTemplate>
            <Container>
                <h1>The ID of the game to be displayed is {match.params.id}</h1>
            </Container>
        </PageTemplate>
    )
}

export default Game;
