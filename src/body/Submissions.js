import React from "react";
import axios from "axios";

const TRENDING_STOCK_SYMBOL_URL = "http://localhost:8080/problem/trending-problems";

class Submissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        };
        this.setSymbols = this.setSymbols.bind(this);
    }

    componentDidMount() {
        axios.get(TRENDING_STOCK_SYMBOL_URL)
            .then((response) => this.setSymbols(response.data)
                , (error) => console.log(error));
    }

    setSymbols(submissions) {
        this.setState({submissions: submissions});
    }

    render() {
        return (
            <div className="stocks">
                <h2>Symbols</h2>
            </div>
        );
    }
}

export default Submissions;