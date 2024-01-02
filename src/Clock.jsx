import React from 'react';

const list = ['Toyota', 'Honda', 'Huyndai'];

const fetchApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list);
        }, 1000);
    });
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            seconds: new Date().getSeconds(),
            name: this.props.name,
            lists: [],
            darkMode: false,
        };
    }

    componentDidMount() {
        fetchApi().then((res) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    lists: res,
                };
            });
        });
    }

    componentDidUpdate() {
        if (this.state.darkMode) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }

    getTime = () => {
        this.setState({
            ...this.state,
            time: new Date().toLocaleTimeString(),
        });
    };

    toggleDarkMode = () => {
        this.setState({
            ...this.state,
            darkMode: !this.state.darkMode,
        });
    };

    componentWillUnmount() {
        console.log('Component will unmount!');
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h1>Time: {this.state.time}</h1>
                <h2>{this.state.name}</h2>
                <h3 id="seconds">Second: {this.state.seconds}</h3>
                <ul>
                    {this.state.lists.map((el, id) => {
                        return <li key={id}>{el}</li>;
                    })}
                </ul>
                <button onClick={this.getTime}>Get Time</button>
                <button onClick={this.toggleDarkMode}>Toggle light</button>
                {this.state.darkMode && <h1>Dark mode is open</h1>}
            </div>
        );
    }
}

export default Clock;
