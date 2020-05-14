import axios from 'axios';
import { v4 } from 'uuid';
import C from '../constants/actionTypes';

export const addGame = (title, description, coverImgURL) => ({
    type: C.ADD_GAME,
    payload: {
        id: v4(),
        title: title,
        description: description,
        coverImgURL: coverImgURL
    }
});

export const fetchGames = () => {
    return (dispatch) => {
        return axios.get("https://api.randomuser.me/?results=10")
                    .then((response) => {
                        console.log("RECEIVED DATA!", response.data);
                        dispatch(addGame("Skyrim", "RPG wow great", "https://elderscrolls.bethesda.net/assets/imgs/meta/skyrim-facebook.jpg"));
                    });
    };
};
