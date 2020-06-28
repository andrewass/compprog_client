import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Body from "./body/Body";
import Header from "./header/Header";

const App = () => {

    return (
        <Router>
            <Header/>
            <Body/>
        </Router>
    );
}

export default App;

