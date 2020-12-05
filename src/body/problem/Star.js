import React from "react";
import goldStar from "../../images/starGold.svg";
import plainStar from "../../images/starPlain.svg";

const Star = ({index, isGold, updateUserRating}) => {

    return (
        <img className="starIcon"
             src={isGold ? goldStar : plainStar}
             alt="A star icon"
             onMouseEnter={() => updateUserRating(index)}/>
    );
};

export default Star;