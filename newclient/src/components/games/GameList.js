import React from 'react';
import Game from './Game';

import { CardDeck } from 'react-bootstrap';

// ===== Component Definition =====
// const GameList = (props) => {
//     props.fuck();
//     return (
//         <div>
//             {props.games.map((currGame) => (
//                 <Game {...currGame} />
//             ))}
//         </div>
//     );
// };

class GameList extends React.Component {
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        return (
            <CardDeck>
                {this.props.games.map((currGame) => (
                    <Game {...currGame} />
                ))}
            </CardDeck>
            
        );
    }
}

export default GameList;
