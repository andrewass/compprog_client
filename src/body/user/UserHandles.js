import React, {useEffect, useState} from "react";

import userHandleService from "../../service/userHandleService";
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
    }

    const updateOption = (option) => {
        setPlatform(option.value);
    }

    const updateUserHandle = (event) => {
        setUserHandle(event.target.value);
    }

    const populateUserHandles = () => {
        userHandleService.getUserHandles()
            .then((response) => setUserHandles(response.data))
            .catch((error) => console.log(error));
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log("Platform is "+platform);
        userHandleService.addUserHandle(userHandle, platform);
    }

    return (
        <div>
            <UserHandleList userHandles={userHandles} />
            <h4>Add User Handle</h4>
            <form onSubmit={submitForm}>
                <input name="username" type="text" placeholder="Your user handle" onChange={updateUserHandle}/>
                <Select onChange={updateOption} options={getSelectOptions()}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default UserHandles;