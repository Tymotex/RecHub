import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

// My components:
// import ReviewList from './ui/ReviewList';
// import ReviewForm from './ui/ReviewForm';
import { Reviews, AddNewReview } from './containers';

// Importing vanilla bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React-bootstrap components:
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const App = ({ store }) => (
    <Container>
        <Jumbotron>
            <h1 className="header">Games Review!</h1>
        </Jumbotron>
        <Reviews />
        <AddNewReview />
    </Container>    
);


export default App;

/*
const App = ({ store }) => (
    <Container>
        <Jumbotron>
            <h1 className="header">Games Review!</h1>
        </Jumbotron>
        <ReviewList store={store} />
        <ReviewForm store={store} />
    </Container>    
);
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    id: v4(),  
                    gameTitle: "Persona 5 Royal",
                    reviewContent: "Persona 5 Royal is fucking amazing.",
                    imgURL: "https://i.ytimg.com/vi/Rv0cx0vNSWg/maxresdefault.jpg",
                    rating: 5,
                    colour: "#9770ed"
                },
                {
                    id: v4(),
                    gameTitle: "Skyrim",
                    reviewContent: "Skyrim is also amazing.",
                    imgURL: "https://img-eshop.cdn.nintendo.net/i/3a41386d4b0999365727a21cc5c13853cfc244abca39b689bb79a339601e48c3.jpg?w=1000",
                    rating: 4,
                    colour: "#9770ed"
                }
            ]
        }
        this.addNewReview = this.addNewReview.bind(this);
        this.setRating = this.setRating.bind(this);
        this.removeReview = this.removeReview.bind(this);
    }

    // When this function is invoked, it means the user has submitted data
    addNewReview(gameTitle, review, imgURL, rating, colour) {
        alert(`Received inputs: ${review}, ${imgURL} and ${colour}`);
        // Creating a new array with the new review appended
        const reviews = [...this.state.reviews, 
            {
                id: v4(),  // v4() from uuid generates a unique identifier
                gameTitle: gameTitle,
                reviewContent: review,
                imgURL: imgURL,
                rating: rating,
                colour: colour
            }
        ];
        this.setState({
            reviews: reviews
        });
    }

    setRating(reviewID, newRating) {
        const updatedReviews = this.state.reviews.map((currReview) => {
            if (currReview.id === reviewID) {
                console.log(`Setting ${currReview.gameTitle} to ${newRating}`);
                return {
                    ...currReview,
                    rating: newRating
                }
            } else {
                return currReview
            }
        });

        this.setState({
            reviews: updatedReviews
        });
    }

    removeReview(reviewID) {
        console.log("Called");
        const updatedReviews = this.state.reviews.filter((currReview) => {
            return currReview.id !== reviewID;
        });
        this.setState({
            reviews: updatedReviews
        });
    }

    render() {
        let {reviews} = this.state;
        return (
            <Container>
                <Jumbotron>
                    <h1 className="header">Games Review!</h1>
                </Jumbotron>
                <ReviewList reviewList={reviews} setRating={this.setRating} removeReview={this.removeReview} />
                <ReviewForm onNewRating={this.addNewReview}/>
            </Container>
        );
    }
} 
*/