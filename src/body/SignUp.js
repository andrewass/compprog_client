import React from "react";
import styled from "styled-components";
import axios from "axios";
import {withRouter} from "react-router-dom";

const URL = {
    sign_up: "http://localhost:8080/auth/sign-up"
};

const AuthBlock = styled.div`
   margin: 0 auto;
   width: 300px;
`;

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            retypedPassword: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.postSignUpToServer = this.postSignUpToServer.bind(this);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    postSignUpToServer(event) {
        event.preventDefault();
        axios.post(URL.sign_up, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
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
                <h3>Sign Up</h3>
                <form onSubmit={this.postSignUpToServer}>
                    <input name="username" type="text" placeholder="Your username" onChange={this.changeHandler}/>
                    <input name="email" type="email" placeholder="Your email address" onChange={this.changeHandler}/>
                    <input name="password" type="password" placeholder="Your password" onChange={this.changeHandler}/>
                    <input name="retypedPassword" type="password" placeholder="Retype password"
                           onChange={this.changeHandler}/>
                    <br/>
                    <button>Sign Up</button>
                </form>
            </AuthBlock>
        );
    }

}

export default withRouter(SignUp);