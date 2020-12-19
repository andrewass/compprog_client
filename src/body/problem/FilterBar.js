import React, {useContext, useEffect, useState} from "react";
import {ProblemContext} from "./ProblemContext";
import {getProblemsByTags} from "../../service/problemService";
import SelectedTag from "./SelectedTag";

const FilterBar = ({problemTags}) => {

    const [context, setContext] = useContext(ProblemContext);

    const [currentTag, setCurrentTag] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const {page, problemList, tagSet, pages} = context;

    const fetchProblemsByTags = () => {
        getProblemsByTags(page, Array.from(tagSet))
            .then(response => {
                setContext({
                    problemList: response.data.problems,
                    tagSet, page,
                    pages: response.data.totalPages,
                });
            })
            .catch(error => console.log(error));
    };

    const submitForm = (event) => {
        event.preventDefault();
        fetchProblemsByTags();
    };

    const fillSuggestions = () => {
        setSuggestions(problemTags.filter(word => word.startsWith(currentTag)));
    };

    const updateCurrentTag = (event) => {
        let current = event.target.value;
        setCurrentTag(current);
        setShowSuggestions(current.length > 0);
    };

    const addTagToList = (item) => {
        tagSet.add(item);
        setCurrentTag("");
        setShowSuggestions(false);
    };

    const fillSuggestionList = () => {
        if (showSuggestions) {
            return (
                <ul>
                    {suggestions.slice(0, Math.min(suggestions.length, 4))
                        .map((item, index) => {
                            return (<li onClick={() => addTagToList(item)}>{item}</li>);
                        })}
                </ul>
            );
        }
    };

    const removeTagFromSet = (tag) => {
        tagSet.delete(tag);
    };

    useEffect(() => {
        fillSuggestions();
    }, [currentTag]);

    return (
        <React.Fragment>
            <form onSubmit={submitForm}>
                <input value={currentTag} type="text" placeholder="Filter on comma separated tags"
                       onChange={updateCurrentTag}/>
                {fillSuggestionList()}
                <input type="submit" value="Filter"/>
            </form>
            <ul className="tagList">
                {Array.from(tagSet).map((item, index) =>
                    <li key={index}>
                        <SelectedTag removeTag={removeTagFromSet} index={index} tag={item}/>
                    </li>)}
            </ul>
        </React.Fragment>
    );
};

export default FilterBar;