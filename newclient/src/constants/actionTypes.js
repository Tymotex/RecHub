/**
 * Macros for specifying action types
 */

const gameActionTypes = {
    ADD_GAME: "ADD_GAME",
    REMOVE_GAME: "REMOVE_GAME",
    FETCHING_GAMES: "FETCHING_GAMES",
    FETCHED_GAMES: "FETCHED_GAMES"
};

const showcaseActionTypes = {
    ADD_SHOWCASE: "ADD_SHOWCASE",
    FETCH_SHOWCASE: "FETCH_SHOWCASE",
    FETCHING_SHOWCASE: "FETCHING_SHOWCASE",
    FETCHED_SHOWCASE: "FETCHED_SHOWCASE"
};

export default Object.assign({}, gameActionTypes, showcaseActionTypes);
