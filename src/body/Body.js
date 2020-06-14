import React from "react";
import {Route, Switch} from "react-router-dom";
import Submissions from "./Submissions";
import Problems from "./Problems";
import SignUp from "./SignUp";

class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/submissions" component={Submissions}/>
                <Route path="/problems" component={Problems}/>
                <Route path="/algorithms" component={Submissions}/>
                <Route path="/sign-up" component={SignUp}/>
            </Switch>
        );
    }
}

export default Body