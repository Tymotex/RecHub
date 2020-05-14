import { connect } from 'react-redux';
import GameList from './GameList';
import { addGame, fetchGames } from '../../actionCreators/gameActions';

const mapStateToProps = (state) => ({
    games: state.games
});

const mapDispatchToProps = (dispatch) => ({
    addNewGame: () => {
        const currAction = addGame("Skyrim", "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.", "https://elderscrolls.bethesda.net/assets/imgs/meta/skyrim-facebook.jpg");
        dispatch(currAction);
    },
    getGames: () => {
        const currAction = fetchGames()
        dispatch(currAction);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList);
