import React from "react";
import {Route, Switch} from "react-router-dom";
import Submissions from "./Submissions";
import Problems from "./problem/Problems";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserPage from "./user/UserPage";
import Contests from "./contest/Contests";

const Body = (props) => {

    return (
        <Switch>
            <Route path="/contests" component={Contests}/>
            <Route path="/problems" component={Problems}/>
            <Route path="/algorithms" component={Submissions}/>
            <Route path="/sign-in" render={() => <SignIn setSignedIn={props.setSignedIn}/>}/>
            <Route path="/sign-up" render={() => <SignUp setSignedIn={props.setSignedIn}/>}/>
            <Route path="/user" component={UserPage} />
        </Switch>
    );
}

export default Body