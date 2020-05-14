import C from '../constants/actionTypes';

export const game = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_GAME):
            // The payload should consist of: id, title, description, coverImgURL
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export const gameList = (state={}, action) => {
    switch (action.type) {
        case (C.FETCHING_GAMES):
            return {
                ...state,
                isFetching: true
            }
        case (C.FETCHED_GAMES):
            return {
                ...state,
                isFetching: false,
                isSuccess: action.payload.isSuccess
            }
        case (C.ADD_GAME):
            return {
                gameList: [
                    ...state.gameList,
                    game({}, action)
                ]
            }
        default:
            return state
    }
}
