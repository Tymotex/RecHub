import axios from 'axios';
import C from '../constants/actionTypes';
import { BASE_URL } from '../constants/api';

// TODO: Refactor
export const addShowcase = (title, description, image) => ({
    type: C.ADD_SHOWCASE,
    payload: {
        title: title,
        description: description,
        image: image
    }
});

export const fetchingShowcase = () => ({
    type: C.FETCHING_SHOWCASE
});

export const fetchedShowcase = (outcome) => ({
    type: C.FETCHED_SHOWCASE,
    payload: {
        isSuccess: outcome
    }
});

// Thunk:
export const fetchShowcase = () => {
    return (dispatch, getState) => {
        dispatch(fetchingShowcase());        
        axios.get(`${BASE_URL}/games/showcase`)
            .then((response) => {
                for (let i = 0; i < response.data.showcase.length; i++) {
                    const { title, description, screenshots } = response.data.showcase[i];
                    dispatch(addShowcase(title, description, screenshots[0]));
                }
                dispatch(fetchedShowcase(true));
            })
            .catch((err) => {
                dispatch(fetchedShowcase(false))
            });
    };
};
