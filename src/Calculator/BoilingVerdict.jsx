import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoilingVerdict extends Component {
    render() {
        const { celcius } = this.props;
        return <h2>{celcius >= 100 ? 'The water would boild' : 'The water would not boild'}</h2>;
    }
}

BoilingVerdict.propTypes = {
    celcius: PropTypes.number.isRequired,
};

export default BoilingVerdict;
