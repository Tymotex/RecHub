import { connect } from 'react-redux';
import Showcase from './Showcase';
import { fetchShowcase } from '../../actionCreators/showcaseActions';

const mapStateToProps = (state) => ({
    showcase: state.showcase.showcaseItems,
    isFetching: state.games.isFetching,
    isSuccess: state.games.isSuccess
});

const mapDispatchToProps = (dispatch) => ({
    getGames: () => {
        const currAction = fetchShowcase();
        dispatch(currAction);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Showcase);
