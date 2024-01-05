import React, { Component, createRef } from 'react';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.input = createRef();
        this.avatar = createRef();
        this.state = {
            selectedFile: null,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.input.current.value);
        console.log(this.avatar);
    };

    handleFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" ref={this.input} />
                    <input
                        type="file"
                        name="avatar"
                        ref={this.avatar}
                        onChange={this.handleFileChange}
                    />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default UncontrolledComponent;
