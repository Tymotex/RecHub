import C from '../constants/actionTypes';

export const game = (state={}, action) => {
    switch (action.type) {
        case (C.ADD_GAME):
            return {
                id: action.id,
                title: action.title,
                description: action.description,
                coverImgURL: action.coverImgURL 
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
