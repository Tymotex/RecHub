import C from '../constants/actionTypes';

export const showcaseItem = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_SHOWCASE):
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

export const showcase = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_SHOWCASE):
            return {
                ...state,
                showcaseItems: [
                    ...state.showcaseItems,
                    showcaseItem({}, action)
                ]
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
