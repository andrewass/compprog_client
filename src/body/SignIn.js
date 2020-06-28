import React from "react";
import {withRouter} from "react-router-dom";
import authService from "../service/authService";


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.postSignUpToServer = this.postSignUpToServer.bind(this);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    postSignUpToServer(event) {
        event.preventDefault();
        authService.signIn(this.state.username, this.state.password);
    }

    render() {
        return (
            <React.Fragment>
                <h3>Sign In</h3>
                <form onSubmit={this.postSignUpToServer}>
                    <input name="username" type="text" placeholder="Your username" onChange={this.changeHandler}/>
                    <input name="password" type="password" placeholder="Your password" onChange={this.changeHandler}/>
                    <br/>
                    <button>Sign In</button>
                </form>
            </React.Fragment>
        );
    }

}

export default withRouter(SignIn);