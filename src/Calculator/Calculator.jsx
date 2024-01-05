import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const toCelcius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
};

const toFahrenheit = (celcius) => {
    return celcius * 1.8 + 32;
};

const tryConvert = (temperature, func) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    let output = func(input);
    output = Math.round(output * 1000) / 1000;
    return output;
};

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: '',
        };
    }

    handleChange = (value, scale) => {
        this.setState({
            temperature: value,
            scale: scale,
        });
    };

    render() {
        console.log(this.state);
        const { scale, temperature } = this.state;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    title="Celsius"
                    temperature={celcius}
                    onTemperatureChange={(value) => this.handleChange(value, 'c')}
                />
                <TemperatureInput
                    title="Fahrenheit"
                    temperature={fahrenheit}
                    onTemperatureChange={(value) => this.handleChange(value, 'f')}
                />
                <BoilingVerdict celcius={Number(celcius)} />
            </div>
        );
    }
}

export default Calculator;
