import React from "react";


class Submissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        };
    }

    render() {
        return (
            <div className="submissions">
                <h2>Submissions</h2>
            </div>
        );
    }
}

export default Submissions;