import React, {useEffect, useState} from "react";
import {getProblemsByTags} from "../../service/problemService";
import SelectedTag from "./SelectedTag";

const FilterBar = ({problemTags, setProblemList, setPages, tagSet, page, setPage}) => {

    const [currentTag, setCurrentTag] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedTagCount, setSelectedTagCount] = useState(0);

    const fetchProblemsByTags = () => {
        setPage(0);
        getProblemsByTags(page, Array.from(tagSet))
            .then(response => {
                setProblemList(response.data.problems);
                setPages(response.data.totalPages);
            })
            .catch(error => console.log(error));
    };

    const submitForm = (event) => {
        event.preventDefault();
        fetchProblemsByTags();
    };

    const fillSuggestions = () => {
        setSuggestions(problemTags.filter(word =>
            word.toLowerCase().startsWith(currentTag.toLowerCase())));
    };

    const updateCurrentTag = (event) => {
        let current = event.target.value;
        setCurrentTag(current);
        setShowSuggestions(current.length > 0);
    };

    const addTagToList = (item) => {
        tagSet.add(item);
        setSelectedTagCount(tagSet.size);
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

    const fillSelectedTagsList = () => {
        return (
            Array.from(tagSet).map((item, index) =>
                <li key={index}>
                    <SelectedTag removeTag={removeTagFromSet} index={index} tag={item}/>
                </li>)
        );
    };

    const removeTagFromSet = (tag) => {
        tagSet.delete(tag);
        setSelectedTagCount(tagSet.size);
    };

    useEffect(() => {
        fillSuggestions();
    }, [currentTag]);

    useEffect(() => {
        fillSelectedTagsList();
    }, [selectedTagCount]);

    return (
        <React.Fragment>
            <form onSubmit={submitForm}>
                <input value={currentTag} type="text" placeholder="Enter category tag" onChange={updateCurrentTag}/>
                {fillSuggestionList()}
                <input type="submit" value="Filter"/>
            </form>
            <ul className="tagList">
                {fillSelectedTagsList()}
            </ul>
        </React.Fragment>
    );
};

export default FilterBar;