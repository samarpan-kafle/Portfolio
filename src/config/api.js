import axios from "axios"

const BASE_URL = "https://api.nationalize.io"

// api client
export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
    withCredentials:false
})
