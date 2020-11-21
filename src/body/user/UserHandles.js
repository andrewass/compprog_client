import React, {useEffect, useState} from "react";
import "../user/user.css";
import userHandleService from "../../service/userHandleService";
import {getRemoteSubmissions} from "../../service/submissionService";
import Select from "react-select";
import UserHandleList from "./UserHandleList";

const UserHandles = ({platforms}) => {

    const [userHandles, setUserHandles] = useState([]);
    const [platform, setPlatform] = useState(undefined);
    const [userHandle, setUserHandle] = useState("");

    useEffect(() => {
        populateUserHandles();
    }, []);

    const getSelectOptions = () => {
        return platforms.map((platform) => {
            return {
                value: platform,
                label: platform
            }
        });
    };

    const updateOption = (option) => {
        setPlatform(option.value);
    };

    const updateUserHandle = (event) => {
        setUserHandle(event.target.value);
    };

    const populateUserHandles = () => {
        userHandleService.getUserHandles()
            .then((response) => setUserHandles(response.data))
            .catch((error) => console.log(error));
    };

    const fetchRemoteSubmissions = () => {
        getRemoteSubmissions(userHandle, platform)
            .catch((error) => console.log(error));
    }

    const submitForm = (event) => {
        event.preventDefault();
        userHandleService.addUserHandle(userHandle, platform)
            .then(fetchRemoteSubmissions)
            .then(populateUserHandles)
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <UserHandleList userHandles={userHandles}/>
            <form className="addUserHandleForm" onSubmit={submitForm}>
                <input name="username" type="text" placeholder="Your user handle" onChange={updateUserHandle}/>
                <Select className="platformSelect" onChange={updateOption} options={getSelectOptions()}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default UserHandles;