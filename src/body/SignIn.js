import React, {useState} from "react";
import authService from "../service/authService";
import {useHistory} from "react-router-dom";


const SignIn = ({setSignedIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const postSignInToServer = (event) => {
        event.preventDefault();
        authService.signIn(username, password);
        setSignedIn(true);
        history.push("/problems");
    }

    return (
        <React.Fragment>
            <h3>Sign In</h3>
            <form onSubmit={postSignInToServer}>
                <input name="username" type="text" placeholder="Your username" onChange={updateUsername}/>
                <input name="password" type="password" placeholder="Your password" onChange={updatePassword}/>
                <br/>
                <button>Sign In</button>
            </form>
        </React.Fragment>
    );
}

export default SignIn;