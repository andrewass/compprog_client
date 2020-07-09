import React, {useState} from "react";
import authService from "../service/authService";
import {useHistory} from "react-router-dom";


const SignIn = ({setSignedIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleErrorResponse = (response) => {
        if(response.status === 401){
            setErrorMessage("Invalid credentials. Please verify username and password");
        } else{
            setErrorMessage("Uknown error occured during sign up");
        }
    }

    const postSignInToServer = (event) => {
        event.preventDefault();
        let result = authService.signIn(username, password);
        result.then((response) => {
            authService.updateLocalStorage(response.data.username, response.data.jwt);
            console.log("After update of local storage");
            setSignedIn(true);
            history.push("/problems");
        }).catch((error) => handleErrorResponse(error.response));
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
            <p>{errorMessage}</p>
        </React.Fragment>
    );
}

export default SignIn;