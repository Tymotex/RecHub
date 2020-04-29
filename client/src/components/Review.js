import React from 'react';
import Rating from './Rating'

class Review extends React.Component { 
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("Mounting");
        this.style = { backgroundColor: "yellow" };
    }

    shouldComponentUpdate(newProps) {
        return newProps.rating !== this.props.rating;
    }

    componentWillUpdate(newProps) {
        console.log(this.myRef);
        this.style = { backgroundColor: "red" };
        alert(`${this.props.gameTitle}: rating ${this.props.rating} -> ${newProps.rating}`)
    }

    componentDidUpdate(oldProps) {
        console.log( (oldProps.rating > this.props.rating) ? "worse" : "better or equal" );
        this.style = { backgroundColor: "green" };
    }

    render() {
        let { reviewContent, rating, setRating=(f)=>f } = this.props;
        return (
            <span style={this.style}>
                {reviewContent} My rating:
                <Rating rating={rating} setRating={(newRating) => {
                        setRating(newRating);
                    }
                }/>
            </span>
        );
    }
}

export default Review;