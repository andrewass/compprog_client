import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";
import "./index.css"

const App = () => {

    const [signedIn, setSignedIn] = useState(localStorage.getItem("isSignedIn"));

    return (
        <div className="appBody">
            <Router>
                <Header signedIn={signedIn} setSignedIn={setSignedIn}/>
                <Body setSignedIn={setSignedIn}/>
            </Router>
        </div>
    );
}

export default App;

