import React from 'react';
import Game from './Game';

// ===== Component Definition =====
const GameList = (props) => {
    
    
    return (
        <div>
            {props.games.map((currGame) => (
                <Game {...currGame} />
            ))}
        </div>
    );
};

export default GameList;
