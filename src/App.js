import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components";
import Body from "./body/Body";
import Header from "./header/Header";

const AppBlock = styled.div`
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
`;

const App = () => {
    const [username, setUsername] = useState("");
    const [jwt, setJwt] = useState("");
    const [signedIn, setSignedIn] = useState(false)

    const setUserInfo = (username, token, isSignedIn) => {
        setUsername(username);
        setJwt(token)
        setSignedIn(isSignedIn)
    }

    return (
        <AppBlock>
            <Router>
                <Header setUserInfo={setUserInfo} isSignedIn={signedIn}/>
                <Body setUserInfo={setUserInfo}/>
            </Router>
        </AppBlock>
    );
}

export default App;

