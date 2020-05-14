import React from 'react';
import Game from './Game';

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
        this.props.addNewGame();
    }

    render() {
        return (
            <div>
                {this.props.games.map((currGame) => (
                    <Game {...currGame} />
                ))}
            </div>
        );
    }
}

export default GameList;
