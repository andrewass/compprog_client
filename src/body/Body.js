import React from "react";
import {Route, Switch} from "react-router-dom";
import Submissions from "./Submissions";
import Problems from "./Problems";

class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/submissions" component={Submissions}/>
                <Route path="/problems" component={Problems}/>
                <Route path="/algorithms" component={Submissions}/>
            </Switch>
        );
    }
}

export default Body