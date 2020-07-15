import React, {useEffect, useState} from "react";
import axios from "axios";
import ContestList from "./ContestList";

const UPCOMING_CONTESTS_URL = "http://localhost:8080/contest/upcoming-contests";

const Contests = () => {

    const [contests, setContests] = useState([]);

    useEffect(() => {
        axios.get(UPCOMING_CONTESTS_URL)
            .then((response) => setContests(response.data)
                , (error) => console.log(error));
    }, []);

    return (
        <div className="contests">
            <ContestList contests={contests}/>
        </div>
    );
};

export default Contests;