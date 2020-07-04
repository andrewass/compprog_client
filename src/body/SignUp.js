import React, {useState} from "react";
import authService from "../service/authService";


const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    const [email, setEmail] = useState("");

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const updateRetypedPassword = (event) => {
        setRetypedPassword(event.target.value);
    }

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const postSignUpToServer = (event) => {
        event.preventDefault();
        authService.signUp(username, password, email);
    }

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={postSignUpToServer}>
                <input name="username" type="text" placeholder="Your username" onChange={updateUsername}/>
                <input name="email" type="email" placeholder="Your email address" onChange={updateEmail}/>
                <input name="password" type="password" placeholder="Your password" onChange={updatePassword}/>
                <input name="retypedPassword" type="password" placeholder="Retype password"
                       onChange={updateRetypedPassword}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}

export default SignUp;