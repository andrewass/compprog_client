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


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            jwt: "",
            isSignedIn: false
        };
        this.setUserInfo = this.setUserInfo.bind(this);
    }

    setUserInfo(username, token, isSignedIn) {
        this.setState({
                isSignedIn: isSignedIn,
                username: username,
                jwt: token
            }
        );
    }

    render() {
        return (
            <AppBlock>
                <Router>
                    <Header setUserInfo={this.setUserInfo} isSignedIn={this.state.isSignedIn}/>
                    <Body setUserInfo={this.setUserInfo}/>
                </Router>
            </AppBlock>
        );
    }
}

export default App;
