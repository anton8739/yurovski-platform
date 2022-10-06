import axios from "axios";

export const apiAxios = axios.create({
    withCredentials: true,
    baseURL: window.location.origin,
});