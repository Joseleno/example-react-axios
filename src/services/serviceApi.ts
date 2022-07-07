import Axios from "axios";

export const Api = Axios.create({
    baseURL: "http://localhost:2170/",
});