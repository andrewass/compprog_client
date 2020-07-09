import axios from "axios";

const URL = {
    sign_in: "http://localhost:8080/auth/sign-in",
    sign_up: "http://localhost:8080/auth/sign-up"
};

const signUp = (username, password, email) => {
    axios.post(URL.sign_up, {
        username: username,
        password: password,
        email: email
    }).then((response) => {
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("isSignedIn", "true");
    }).catch((error) => console.log(error));
};

const signIn = async (username, password) => {
    return await axios.post(URL.sign_in, {username, password,});
};

const signOut = () => {
    localStorage.clear();
};

const getSignedInUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

const updateLocalStorage = (username, jwt) => {
    localStorage.setItem("username", username);
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("isSignedIn", "true");
};

export default {
    signIn,
    signUp,
    signOut,
    getSignedInUser,
    updateLocalStorage
};

