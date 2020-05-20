import C from './constants';
import moment from 'moment/moment';
import { v4 } from 'uuid';

export const addReview = (gameTitle, reviewContent, imgURL, rating, colour) => ({
    type: C.ADD_REVIEW,
    id: v4(),
    gameTitle: gameTitle,
    reviewContent: reviewContent,
    imgURL: imgURL,
    rating: rating,
    colour: colour,
    timeCreated: moment().unix()
});

export const rateReview = (id, newRating) => ({
    type: C.RATE_REVIEW,
    id: id,
    rating: newRating
});

export const removeReview = (id) => ({
    type: C.REMOVE_REVIEW,
    id: id
});

export const sortReviews = (sortBy) => {
    if (sortBy === "rating") {
        return {
            type: C.SORT_REVIEWS,
            sortBy: "SORTED_BY_RATING"
        }
    } else if (sortBy === "title") {
        return {
            type: C.SORT_REVIEWS,
            sortBy: "SORTED_BY_TITLE"
        }
    } else {
        return {
            type: C.SORT_REVIEWS,
            sortBy: "SORTED_BY_DATE"
        }
    }
}