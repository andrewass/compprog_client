import React from "react";
import axios from "axios";
import ProblemList from "./ProblemList";

const TRENDING_PROBLEMS_URL = "http://localhost:8080/problem/trending-problems";

class Problems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            problems: []
        };
        this.setProblems = this.setProblems.bind(this);
    }

    componentDidMount() {
        axios.get(TRENDING_PROBLEMS_URL)
            .then((response) => this.setProblems(response.data)
                , (error) => console.log(error));
    }

    setProblems(problems) {
        this.setState({problems: problems});
    }

    render() {
        return (
            <div className="problems">
                <ProblemList problems={this.state.problems} />
            </div>
        );
    }
}

export default Problems;