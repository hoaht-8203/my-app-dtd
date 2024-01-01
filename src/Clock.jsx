import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            second: new Date().getSeconds(),
            name: this.props.name,
        };
    }

    getTime = () => {
        this.setState({
            ...this.state,
            time: new Date().toLocaleTimeString(),
        });
    };
    render() {
		console.log(this.props.name);
        return (
            <div>
                <h1>Time: {this.state.time}</h1>
                <h2>{this.state.name}</h2>
                <h3>Second: {this.state.second}</h3>
                <button onClick={this.getTime}>Get Time</button>
            </div>
        );
    }
}

export default Clock;
