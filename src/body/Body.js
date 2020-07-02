import React from "react";
import {Route, Switch} from "react-router-dom";
import Submissions from "./Submissions";
import Problems from "./Problems";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Body = (props) => {

    return (
        <Switch>
            <Route path="/submissions" component={Submissions}/>
            <Route path="/problems" component={Problems}/>
            <Route path="/algorithms" component={Submissions}/>
            <Route path="/sign-in" render={() => <SignIn setSignedIn={props.setSignedIn}/>}/>
            <Route path="/sign-up" render={() => <SignUp setSignedIn={props.setSignedIn}/>}/>
        </Switch>
    );
}

export default Body