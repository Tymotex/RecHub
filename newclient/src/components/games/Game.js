import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card, Image } from 'react-bootstrap';
import './Game.scss';

// ===== Component Definition =====
const Game = ({ title, description, coverImgURL, totalRating }) => {
    return (
        <Card className="game-card" style={{maxHeight: "600px", minHeight: "600px"}}>
                <Link to="/login">
                    <Image className="game-cover-image" fluid src={coverImgURL}  />
                </Link>

                <Card.Body className="game-card-body">
                    <Link className="link-no-underline" to="/login"><Card.Title>{title}</Card.Title></Link>
                    <Card.Text>{description.substring(0, 200) + "... Read more"}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Rating: {Math.round(totalRating)}
                    </small>
                </Card.Footer>
        </Card>

        // <Card style={{maxHeight: "374px", height: "100%"}}>
        //     <Row>
        //         <Col md={6}>
        //         <img src={coverImgURL} className="card-img" fluid />
        //         </Col>
        //         <Col md={6}>
        //             <Card.Body className="game-card-body" style={{maxHeight: "374px"}}>
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             </Card.Body>
        //         </Col>
        //     </Row>
        // </Card>

        // <div class="card">
        //     <div class="row ">
        //         <div class="col-md-4">
        //             <Image src={coverImgURL} fluid />
        //         </div>
        //         <div class="col-md-8 px-3">
        //             <div class="card-block px-3">
        //             <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
        //             <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        //             <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //             <a href="#" class="btn btn-primary">Read More</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Game;
