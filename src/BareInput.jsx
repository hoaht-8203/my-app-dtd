import React from 'react';
import PropTypes from 'prop-types';

function BareInput(props) {
    return <input {...props} />;
}

BareInput.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

export default BareInput;
