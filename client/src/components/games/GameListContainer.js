import { connect } from 'react-redux';
import GameList from './GameList';
import { fetchGames } from '../../actionCreators/gameActions';

const mapStateToProps = (state) => {
    return {
        games: state.games.gameList,
        isFetching: state.games.isFetching,
        isSuccess: state.games.isSuccess
    }
};

const mapDispatchToProps = (dispatch) => ({
    getGames: () => {
        const currAction = fetchGames();
        dispatch(currAction);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList);
