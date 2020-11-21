import React, {useState} from "react";
import codeforcesIcon from "../../images/codeforces.png";
import "./problem.css";
import Star from "./Star";
import {submitUserRating} from "../../service/problemService";

const problemCol = "problemCol";

const Problem = ({problem}) => {

    const [userRating, setUserRating] = useState(problem.rating)

    const updateUserRating = (index) => {
        console.log("Updating rating to index " + index);
        setUserRating(index + 1);
    };

    const isGoldStar = (index) => {
        if (index === 0) {
            return true;
        }
        return index < userRating;
    }

    const getStars = () => {
        return (
            Array(6).fill(1).map((item, index) =>
                <Star key={index} index={index} isGold={isGoldStar(index)}
                      updateUserRating={(ind) => updateUserRating(ind)}/>)
        );
    }

    return (
        <div className="problemRow">
            <img src={codeforcesIcon} id="codeforcesIcon"
                 className="problemCol" alt="The Codeforces icon"/>
            <a href={problem.problem.problemUrl} className={problemCol} target="_blank" rel="noopener noreferrer">
                {problem.problem.problemName}
            </a>
            <div className="starRow"
                 onMouseLeave={() => {
                     setUserRating(problem.rating)
                 }}
                 onClick={() => {
                     submitUserRating(problem.id, userRating)
                 }}>
                {getStars()}
            </div>
        </div>
    );
};

export default Problem;