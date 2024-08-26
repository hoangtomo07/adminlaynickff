import axios from "axios";

const request = axios.create({
    baseURL: "https://laynickff.com/api",
    withCredentials: true,
});

export default request;
