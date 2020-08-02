import React from "react";
import {Route, Switch} from "react-router-dom";
import Problems from "./problem/Problems";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserPage from "./user/UserPage";
import Contests from "./contest/Contests";
import SegmentTreeText from "./datastructure/tree/SegmentTreeText";
import "../body/body.css"
import FordFulkerson from "./algorithm/flow/FordFulkerson";

const Body = (props) => {

    return (
        <div className="bodySection">
            <Switch>
                <Route path="/contests" component={Contests}/>
                <Route path="/problems" component={Problems}/>
                <Route path="/network-flow" component={FordFulkerson}/>
                <Route path="/tree" component={SegmentTreeText}/>
                <Route path="/sign-in" render={() => <SignIn setSignedIn={props.setSignedIn}/>}/>
                <Route path="/sign-up" render={() => <SignUp setSignedIn={props.setSignedIn}/>}/>
                <Route path="/user" component={UserPage}/>
            </Switch>
        </div>
    );
};

export default Body;