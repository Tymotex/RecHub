import { connect } from 'react-redux';
import GameDetails from './GameDetails';
import { fetchGameDetails } from '../../actionCreators/gameActions';

const mapStateToProps = (state) => ({
    currGame: state.games.currGame
});

const mapDispatchToProps = (dispatch) => ({
    getGameDetails: (gameID) => {
        dispatch(fetchGameDetails(gameID));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameDetails);
