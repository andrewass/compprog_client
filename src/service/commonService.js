import axios from "axios";

const URL_PLATFORMS = "http://localhost:8080/common/platforms";

const getPlatforms = async () => {
    return await axios.get(URL_PLATFORMS);
};

export default {
    getPlatforms
};