import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            note: '',
            sex: 'male',
            confirm: false,
        };
    }

    handleChange = (event) => {
        const { target } = event;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />{' '}
                    <br />
                    <label htmlFor="note">Note</label>
                    <textarea
                        name="note"
                        id="note"
                        value={this.state.note}
                        onChange={this.handleChange}
                    />{' '}
                    <br />
                    <label htmlFor="sex">Sex</label>
                    <select value={this.state.sex} name="sex" id="sex" onChange={this.handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>{' '}
                    <br />
                    <input
                        checked={this.state.confirm}
                        type="checkbox"
                        name="confirm"
                        id="confirm"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="confirm">Confirm</label>
                    <br />
                    <button onClick={this.handleSubmit}>submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
