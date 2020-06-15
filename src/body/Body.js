import React from "react";
import {Route, Switch} from "react-router-dom";
import Submissions from "./Submissions";
import Problems from "./Problems";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class Body extends React.Component {

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
            <Switch>
                <Route path="/submissions" component={Submissions}/>
                <Route path="/problems" component={Problems}/>
                <Route path="/algorithms" component={Submissions}/>
                <Route path="/sign-in" render={() => <SignIn setUserInfo={this.setUserInfo}/>}/>
                <Route path="/sign-up" render={() => <SignUp setUserInfo={this.setUserInfo}/>}/>
            </Switch>
        );
    }
}

export default Body