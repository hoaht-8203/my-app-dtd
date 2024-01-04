import React, { Component } from 'react';

const fetchComments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['A', 'B', 'C']);
        }, 1000);
    });
};

class CorrectlyState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            comments: [],
        };
    }

    increase = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    };

    componentDidMount() {
        fetchComments().then((res) => {
            this.setState((prevState) => ({
                ...prevState,
                comments: res,
            }));
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default CorrectlyState;
