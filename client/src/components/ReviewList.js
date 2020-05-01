import React from 'react';
import Review from './Review';

// React-bootstrap components:
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ReviewList extends React.Component { 
    
    render() {
        let { reviewList, setRating=(f)=>f, removeReview=(f)=>f } = this.props;
        return (
            <div>
                <Row>
                    {(reviewList && reviewList.length > 0) ?
                        reviewList.map((review, i) => {
                            return (
                                <Col key={i} md={6}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={review.imgURL} />
                                        <Card.Body style={{backgroundColor: review.colour}}>
                                            <Card.Title>{review.gameTitle}</Card.Title>
                                            <Card.Text>
                                                <Review {...review} setRating={(newRating) => {
                                                        setRating(review.id, newRating); 
                                                    }    
                                                } />
                                            </Card.Text>
                                            <Button onClick={() => removeReview(review.id)} >
                                                Delete Review
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }) : <p>No reviews!</p>
                    }
                </Row>
            </div>
        );
    }
}

export default ReviewList;
