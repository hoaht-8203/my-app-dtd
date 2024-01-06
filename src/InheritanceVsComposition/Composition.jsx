import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        console.log('Click button');
    };

    render() {
        const { className = '', children } = this.props;
        return (
            <button className={`btn ${className}`} onClick={this.handleClick}>
                Click here {children}
            </button>
        );
    }
}

class Layout extends Component {
    render() {
        const { left, right } = this.props;
        return (
            <div className="layout">
                <div className="layout-left">{left}</div>
                <div className="layout-right">{right}</div>
            </div>
        );
    }
}

class Composition extends Component {
    render() {
        return (
            <div>
                Composition
                <Button />
                <Button className="btn-red" />
                <Button className="btn-yellow">Click cmmd</Button>
                <Layout
                    left={<Button className="btn-left" />}
                    right={<Button className="btn-right" />}
                />
            </div>
        );
    }
}

export default Composition;
