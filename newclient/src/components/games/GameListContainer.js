import { connect } from 'react-redux';
import GameList from './GameList';

const mapStateToProps = (state) => ({
    games: state.games
});

const mapDispatchToProps = (dispatch) => ({
    testFunction: () => {
        alert("Wow this worked");
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList);
