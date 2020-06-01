/**
 * Macros for specifying action types
 */

const gameActionTypes = {
    ADD_GAME: "ADD_GAME",
    ADD_GAME_LIST: "ADD_GAME_LIST",
    REMOVE_GAME: "REMOVE_GAME",
    FETCHING_GAMES: "FETCHING_GAMES",
    FETCHED_GAMES: "FETCHED_GAMES"
};

const showcaseActionTypes = {
    ADD_SHOWCASE_ITEMS: "ADD_SHOWCASE_ITEMS",
    FETCH_SHOWCASE: "FETCH_SHOWCASE",
    FETCHING_SHOWCASE: "FETCHING_SHOWCASE",
    FETCHED_SHOWCASE: "FETCHED_SHOWCASE"
};

const gameDetailActionTypes = {
    FETCH_GAME_DETAILS: "FETCH_GAME_DETAILS",
    FETCHING_GAME_DETAILS: "FETCHING_GAME_DETAILS",
    FETCHED_GAME_DETAILS: "FETCHED_GAME_DETAILS"
};

// Composing all the constants into a single object:
export default Object.assign(
    {},
    gameActionTypes,
    showcaseActionTypes,
    gameDetailActionTypes
);
