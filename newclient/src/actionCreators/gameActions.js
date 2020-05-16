import axios from 'axios';
import { v4 } from 'uuid';
import C from '../constants/actionTypes';
import dotenv from 'dotenv';

dotenv.config();

export const addGame = (title, description, coverImgURL) => ({
    type: C.ADD_GAME,
    payload: {
        id: v4(),
        title: title,
        description: description,
        coverImgURL: coverImgURL
    }
});

export const fetchingGames = () => ({
    type: C.FETCHING_GAMES
});

export const fetchedGames = (outcome) => ({
    type: C.FETCHED_GAMES,
    payload: {
        isSuccess: outcome
    }
});

export const fetchGames = () => {
    return (dispatch, getState) => {
        dispatch(fetchingGames())

        const postData = {

        };

        // axios({
        //         url: "https://api-v3.igdb.com/games",
        //         method: "POST",
        //         headers: {
        //             "Accept": "application/json",
        //             "user-key": process.env.IGDB_API_KEY
        //         },
        //         data: "fields name,popularity; sort popularity desc;"
        //     })
        axios.get("http://localhost:3001/games/list")
            .then((response) => {
                // TODO: Remove this artificial delay. This is just to make sure that the loading spinner was showing up correctly
                setTimeout(() => {
                    console.log("RECEIVED DATA!", response.data);
                    dispatch(addGame("Skyrim", "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.", "https://elderscrolls.bethesda.net/assets/imgs/meta/skyrim-facebook.jpg"));
                    dispatch(addGame("Dragon Age Inquisition", "Dragon Age: Inquisition is an action role-playing video game developed by BioWare and published by Electronic Arts. The third major game in the Dragon Age franchise, Dragon Age: Inquisition is the sequel to Dragon Age: Origins and Dragon Age II.", "https://cdn.mos.cms.futurecdn.net/ykkhJshuUd2RVjB9A44sHa.jpg"));
                    dispatch(fetchedGames(true));
                }, 1000);
            })
            .catch((err) => {
                dispatch(fetchedGames(false))
            });
    };
};
