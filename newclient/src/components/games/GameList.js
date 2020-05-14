import React from 'react';
import Game from './Game';

// Bootstrap Components
import { Row, Col, Spinner } from 'react-bootstrap';

// ===== Component Definition =====
class GameList extends React.Component {
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        return (
            // If the API call is in progress, then show loading graphics
            (this.props.isFetching) ? 
                <Spinner animation="grow" style={{width: "400px", height: "400px", margin: "0 auto", display: "table"}} />  :
                // If the API call succeeded, then render a grid of cards for each game 
                (this.props.isSuccess) ? 
                    // If the API call returned a non-empty list of games, then render them, otherwise show a message say no results were found 
                    (this.props.games.length > 0) ?
                            <Row>
                                {this.props.games.map((currGame, i) => (
                                    <Col xs={12} md={6} lg={4} xl={3}>
                                        <Game key={i} {...currGame} />
                                    </Col>
                                ))}
                            </Row>
                        : 
                        <p>There are no games!</p>
                    : 
                    <p>Something messed up!</p>
        );
    }
}

export default GameList;
