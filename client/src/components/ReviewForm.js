import React from 'react';
import PropTypes from 'prop-types';
import { addReview } from '../actionCreators';

const ReviewForm = (props, { store }) => {
    // Local variables:
    let _gameTitle, _reviewContent, _imgURL, _rating, _colour;

    const submitReview = (event) => {
        event.preventDefault();
        // Passing the form data up the component tree (to the component where state is managed)
        store.dispatch(addReview(
                _gameTitle.value,
                _reviewContent.value,
                _imgURL.value,
                _rating.value,
                _colour.value
            )
        );
        _gameTitle.value = "";
        _reviewContent.value = "";
        _rating.value = "";
        _colour.value = "#000000";
        _imgURL.value = "";
    }

    return (
        <form onSubmit={submitReview}>
            {/* Instead of ref="_gameTitle", we are passing a callback which takes in a reference to this */}
            {/* component and sets the local variable _gameTitle to thisElem */}
            <input ref={(thisElem) => _gameTitle = thisElem}
                type="text"
                placeholder="Game title">       
            </input>
            <input ref={(thisElem) => _reviewContent = thisElem}
                type="text"
                placeholder="Your review">       
            </input>
            <input ref={(thisElem) => _imgURL = thisElem}
                type="text"
                placeholder="Image URL">       
            </input>
            <input ref={(thisElem) => _rating = thisElem}
                type="number"
                placeholder="Your rating">       
            </input>
            <input ref={(thisElem) => _colour = thisElem}
                type="color">       
            </input>
            <button>Submit</button>
        </form>
    );
}

export default ReviewForm;