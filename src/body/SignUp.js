import React from "react";
import authService from "../service/authService";


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
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    postSignUpToServer(event) {
        event.preventDefault();
        authService.signUp();
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }

}

export default SignUp;