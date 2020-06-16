import React from "react";
import styled from "styled-components";
import axios from "axios";
import {withRouter} from "react-router-dom";

const URL = {
    sign_in: "http://localhost:8080/auth/sign-in"
};

const AuthBlock = styled.div`
   margin: 0 auto;
   width: 300px;
`;

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
        axios.post(URL.sign_in, {
            username: this.state.username,
            password: this.state.password,
        })
            .then((response) => {
                this.props.setUserInfo(this.state.username, response.data.jwt, true);
                this.props.history.push("/problems");
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <AuthBlock>
                <h3>Sign In</h3>
                <form onSubmit={this.postSignUpToServer}>
                    <input name="username" type="text" placeholder="Your username" onChange={this.changeHandler}/>
                    <input name="password" type="password" placeholder="Your password" onChange={this.changeHandler}/>
                    <br/>
                    <button>Sign In</button>
                </form>
            </AuthBlock>
        );
    }

}

export default withRouter(SignIn);