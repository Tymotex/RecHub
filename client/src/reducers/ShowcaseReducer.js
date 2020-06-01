import C from '../constants/actionTypes';

export const showcaseItems = (state=[], action) => {
    switch (action.type) {
        case (C.ADD_SHOWCASE_ITEMS):
            return action.payload.showcaseItems;
        default:
            return state;
    }
}

export const showcase = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_SHOWCASE_ITEMS):
            return {
                ...state,
                showcaseItems: showcaseItems([], action)
            };
        case (C.FETCHING_SHOWCASE):
            return {
                ...state,
                isFetching: true
            };
        case (C.FETCHED_SHOWCASE):
            return {
                ...state,
                isFetching: false,
                isSuccess: action.payload.isSuccess
            };
        default:
            return state;
    }
}
