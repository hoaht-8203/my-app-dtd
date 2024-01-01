import React from 'react';

class Welcome extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                    Hello {this.props.name}, {this.props.age}
                </h1>
            </div>
        );
    }
}

export default Welcome;
