import React from 'react';
// import { ParallaxBanner } from 'react-scroll-parallax';

import { Parallax, Background } from 'react-parallax';
import './ParallaxImage.scss';

const ParallaxImage = (props) => {
    return (
        <Parallax
            blur={2}
            bgImage={props.imgURL}
            bgImageAlt="the cat"
            strength={300}
        >
            <div style={{ height: '700px' }} />
        </Parallax>
    );
}

export default ParallaxImage; 
