import C from './constants';

// 'review' reducer 
export const review = (state={}, action) => {
    switch (action.type) {
        case C.ADD_REVIEW:
            return {
                id: action.id,
                gameTitle: action.gameTitle,
                reviewContent: action.reviewContent,
                imgURL: action.imgURL,
                rating: action.rating,
                colour: action.colour
            };
        case C.RATE_REVIEW:
            return (state.id === action.id) ? {
                ...state,
                rating: action.rating
            } : state;
        default:
            return state;
    }
}

// 'reviews' reducer
export const reviews = (state=[], action) => {
    switch (action.type) {
        case C.ADD_REVIEW:
            // It's tempting to use state.push(...), but we must keep reducers as pure
            // functions that don't mutate incoming data
            return [
                ...state,
                // Delegate the creation of a new review to the 'review' reducer
                review({}, action)
            ];
        case C.RATE_REVIEW:
            // Delegate the rerating of a review to the 'review' reducer
            return state.map((eachReview) => {
                 return review(eachReview, action);
            })
        case C.REMOVE_REVIEW:
            return state.filter((eachReview) => eachReview.id !== action.id);
        default:
            return state;
    }
}

// 'sort' reducer. Its only job is to manage the 'sort' state variable (see sampleStateTree.json)
export const sort = (state="SORT_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_REVIEWS:
            return action.sortBy;
        default:
            return state;
    }
}


