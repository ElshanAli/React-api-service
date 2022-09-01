import axios from "axios";

export class HttpClient{
    baseURL;

    constructor (url) {
        this.baseURL = url; 
    }

   async get(endpoint) {
        return await axios.get(`${this.baseURL}/${endpoint}`)
    }

    async post(endpoint, body) {
        return await axios.post(`${this.baseURL}/${endpoint}`, body)
    }

    async put(endpoint, body, id) {
        return await axios.put(`${this.baseURL}/${endpoint}/${id}`, body)
    }

    async patch(endpoint, body, id) {
        return await axios.patch(`${this.baseURL}/${endpoint}/${id}`, body)
    }
}

