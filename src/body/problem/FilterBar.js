import React, {useEffect, useState} from "react";

const FilterBar = ({problemTags}) => {

    const [currentTag, setCurrentTag] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedTags] = useState(new Set());
    const [showSuggestions] = useState(true);

    const submitForm = (event) => {
        event.preventDefault();
    };

    const fillSuggestions = () => {
        setSuggestions(problemTags.filter(word => word.startsWith(currentTag)));
    };

    const updateCurrentTag = (event) => {
        setCurrentTag(event.target.value);
        if (currentTag.charAt(currentTag.length - 1) === ',') {
            selectedTags.add(currentTag.substring(0, currentTag.length - 1));
            setCurrentTag("");
        }
    };

    const fillSuggestionList = () => {
        if (showSuggestions) {
            return (
                <ul>
                    {suggestions.slice(0, Math.min(suggestions.length, 4))
                        .map((item, index) => {
                            return (<li onClick={() => setCurrentTag(item)}>{item}</li>);
                        })}
                </ul>
            );
        }
    };

    useEffect(() => {
        fillSuggestions();
        console.log("Logging useeffect");
    },[currentTag]);

    return (
        <div>
            <form onSubmit={submitForm}>
                <input value={currentTag} type="text" placeholder="Filter on comma separated tags"
                       onChange={updateCurrentTag}/>
                {fillSuggestionList()}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default FilterBar;