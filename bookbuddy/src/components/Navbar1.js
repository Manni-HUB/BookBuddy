import React from 'react'
import PropTypes from 'prop-types';


const Doctest = ({text}) => {
    return (
        <div data-testid="test1">
             <h3>{text}</h3>
        </div>
    );
};

Text.defaultProps = {
    text: "Hey world",
};

Text.PropTypes = {
    text: PropTypes.string,
}

export default Doctest;