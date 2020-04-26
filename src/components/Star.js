import React from 'react';
import PropTypes from 'prop-types';

const Star = ({selected=false, onClick=(f) => f}) => {
    let starStyle = {
        cursor: "pointer",
        height: "25px",
        width: "25px",
        margin: "2px",
        float: "left",
        backgroundColor: "grey",
        clipPath: `polygon(
            50% 0%,
            63% 38%,
            100% 38%,
            69% 59%,
            82% 100%,
            50% 75%,
            18% 100%,
            31% 59%,
            0% 38%,
            37% 38%
        )`
    };
    let shadedStarStyle = {
        backgroundColor: "red"
    };

    return (
        <span className={selected ? "star selected" : "star"}
             onClick={onClick}
             style={selected ? {...starStyle, ...shadedStarStyle} : {...starStyle}}>
        </span>
    );
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

export default Star;