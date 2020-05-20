import axios from 'axios';
import C from '../constants/actionTypes';
import { BASE_URL } from '../constants/api';

// ===== Action Creators for: Game and GameList =====
// TODO: Refactor
export const addGame = (id, title, description, coverImgURL, totalRating) => ({
    type: C.ADD_GAME,
    payload: {
        id: id,
        title: title,
        description: description,
        totalRating: totalRating,
        coverImgURL: coverImgURL
    }
});

export const fetchingGames = () => ({
    type: C.FETCHING_GAMES
});

export const fetchedGames = (outcome) => ({
    type: C.FETCHED_GAMES,
    payload: {
        isSuccess: outcome
    }
});

// Thunk:
export const fetchGames = () => {
    return (dispatch, getState) => {
        dispatch(fetchingGames());        
        axios.get(`${BASE_URL}/games/list`)
            .then((response) => {
                for (let i = 0; i < response.data.games.length; i++) {
                    const { id, name, summary, total_rating, coverImages } = response.data.games[i];
                    dispatch(addGame(id, name, summary, coverImages[0], total_rating));
                }
                dispatch(fetchedGames(true));
            })
            .catch((err) => {
                dispatch(fetchedGames(false));
            });
    };
};

// ===== Action Creators for: Game Details =====
export const addGameDetails = ({ title, storyline, summary }) => {

}

export const fetchGameDetails = (gameID) => {
    return (dispatch) => {
        console.log(gameID)
        axios.get(`${BASE_URL}/games/details?gameID=${gameID}`)
            .then((response) => {
                console.log("Fetched game details! The response looks like");
                console.log(response.data);
            })
            .catch((err) => {
                dispatch(fetchedGameDetails(false));
            });
    }
};

export const fetchingGameDetails = () => ({
    type: C.FETCHED_GAME_DETAILS
});

export const fetchedGameDetails = (outcome) => ({
    type: C.FETCHED_GAME_DETAILS,
    payload: {
        isSuccess: outcome
    }
});



