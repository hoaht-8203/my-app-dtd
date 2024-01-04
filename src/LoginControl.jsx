import React from 'react';

class LoginButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Login</button>;
    }
}

class LogoutButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Logout</button>;
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: this.props.isLogin,
        };
    }

    handleClickLogin = () => {
        this.setState({
            isLogin: true,
        });
    };

    handleClickLogout = () => {
        this.setState({
            isLogin: false,
        });
    };

    render() {
        return (
            <div className="login-control">
                {this.state.isLogin ? (
                    <LogoutButton onClick={this.handleClickLogout} />
                ) : (
                    <LoginButton onClick={this.handleClickLogin} />
                )}
            </div>
        );
    }
}

export default LoginControl;
