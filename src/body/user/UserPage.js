import React, {useEffect, useState} from "react";
import commonService from "../../service/commonService";
import UserHandles from "./UserHandles";


const UserPage = () => {

    const [platforms, setPlatforms] = useState([]);

    const populatePlatforms = () => {
        commonService.getPlatforms()
            .then((response) => setPlatforms(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => populatePlatforms(), []);

    return (
        <div>
            <UserHandles platforms={platforms}/>
        </div>
    )
};

export default UserPage;