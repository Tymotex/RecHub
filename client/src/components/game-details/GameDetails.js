import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Showcase } from '../showcase';

// Bootstrap components
import { Container } from 'react-bootstrap';

// The 'match' prop contains the route parameters inside the route: /game/:id
const Game = ({ getGameDetails, history, match, location }) => {
    const { gameID } = match.params;
    getGameDetails(gameID);
    console.log(match);
    return (
        <Container>
            <h1>The ID of the game to be displayed is {gameID}</h1>
        </Container>
    )
}

Game.propTypes = {
    getGameDetails: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(Game);
