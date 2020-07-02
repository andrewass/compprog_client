import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";

const App = () => {

    const [signedIn, setSignedIn] = useState(localStorage.getItem("isSignedIn"));

    return (
        <Router>
            <Header signedIn={signedIn} setSignedIn={setSignedIn}/>
            <Body setSignedIn={setSignedIn}/>
        </Router>
    );
}

export default App;

