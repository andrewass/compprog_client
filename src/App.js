import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import styled from "styled-components";
import Body from "./body/Body";
import Header from "./header/Header";

const AppBlock = styled.div`
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
`;


function App() {
    return (
        <AppBlock>
            <Router>
                <Header/>
                <Body/>
            </Router>
        </AppBlock>
    );
}

export default App;
