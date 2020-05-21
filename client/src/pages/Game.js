import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { GameDetails } from '../components/game-details';

// The 'match' prop contains the route parameters inside the route: /game/:id
const Game = (props) => {
    return (
        <PageTemplate>
            <GameDetails />
        </PageTemplate>
    )
}

export default Game;
