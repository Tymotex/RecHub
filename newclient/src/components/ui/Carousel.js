import React from 'react';

import { Carousel } from 'react-bootstrap';
import ParallaxImage from './ParallaxImage';

const Showcase = (props) => {
    return (
            <Carousel>
                <Carousel.Item>
                    <ParallaxImage imgURL="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
                    <Carousel.Caption style={{backgroundColor: "black"}}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ParallaxImage imgURL="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                    <Carousel.Caption style={{backgroundColor: "black"}}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ParallaxImage imgURL="https://images.unsplash.com/photo-1580221465362-963dd392df37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1634&q=80" />
                    <Carousel.Caption style={{backgroundColor: "black"}}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>        
    );
}

export default Showcase;