import axios from 'axios';
import C from '../constants/actionTypes';
import { BASE_URL } from '../constants/api';

// TODO: Refactor
export const addShowcaseItems = (showcaseItems) => ({
    type: C.ADD_SHOWCASE_ITEMS,
    payload: {
        showcaseItems: showcaseItems
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
                const showcaseItems = response.data.showcase.map((eachShowcase) => {
                    return {
                        title: eachShowcase.title,
                        description: eachShowcase.description,
                        image: eachShowcase.screenshots[0],
                    };
                });
                console.log("Fetched showcase shit", showcaseItems);
                dispatch(addShowcaseItems(showcaseItems));
                dispatch(fetchedShowcase(true));
            })
            .catch((err) => {
                console.log(err);
                dispatch(fetchedShowcase(false))
            });
    };
};
