import React, {useState} from "react";
import authService from "../service/authService";


const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const postSignUpToServer = (event) => {
        event.preventDefault();
        authService.signIn(this.state.username, this.state.password);
    }

    return (
        <React.Fragment>
            <h3>Sign In</h3>
            <form onSubmit={postSignUpToServer}>
                <input name="username" type="text" placeholder="Your username" onChange={updateUsername}/>
                <input name="password" type="password" placeholder="Your password" onChange={updatePassword}/>
                <br/>
                <button>Sign In</button>
            </form>
        </React.Fragment>
    );
}

export default SignIn;