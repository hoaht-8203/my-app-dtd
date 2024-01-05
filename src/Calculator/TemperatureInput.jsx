import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TemperatureInput extends Component {
    handleInputChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
    };

    render() {
        const { title, temperature } = this.props;
        return (
            <fieldset>
                <legend>Enter temperature in {title}</legend>
                <input type="text" value={temperature} onChange={this.handleInputChange} />
            </fieldset>
        );
    }
}

TemperatureInput.propTypes = {
    onTemperatureChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TemperatureInput;
