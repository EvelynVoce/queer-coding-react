import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:7018/api/",
    timeout: 30000
})