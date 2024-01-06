import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        console.log('Click to button');
    };

    render() {
        return (
            <button className="btn" onClick={this.handleClick}>
                Button
            </button>
        );
    }
}

class YellowButton extends Button {
    render() {
        return (
            <button className="btn btn-yel" onClick={this.handleClick}>
                Button Yellow
            </button>
        );
    }
}

class Inheritance extends Component {
    render() {
        return (
            <div>
                Inheritance
                <Button />
                <YellowButton />
            </div>
        );
    }
}

export default Inheritance;
