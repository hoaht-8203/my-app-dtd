import React from 'react';

class BareButton extends React.Component {
    handleClick = (value) => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('ADD')}>Add</button>
                <button onClick={() => this.handleClick('EDIT')}>Edit</button>
                <button onClick={() => this.handleClick('DELETE')}>Delete</button>
            </div>
        );
    }
}

export default BareButton;
