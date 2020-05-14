import C from '../constants/actionTypes';

export const game = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_GAME):
            // action.payload should consist of: id, title, description, coverImgURL
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export const gameList = (state=[], action) => {
    switch (action.type) {
        case (C.ADD_GAME):
            return [
                ...state,
                game({}, action)
            ]
        default:
            return state
    }
}
