import axios from "axios"

const domain = "http://localhost:3001/api"
//https://espazaserver.azurewebsites.net/auth/authenticate

const API = {}

const STOCK = {
    get: async (config) => {
        return axios.get(domain + '/stock', config)
    },
    getById: async (id, config) => {
        return axios.get(domain + `/stock/${id}`, config)
    },
    changeById: async (id,payload, config) => {
        return axios.post(domain + `/stock/${id}`, payload, config)
    },
    add: async (payload, config) => {
        return axios.post(domain + `/stock/`, payload, config)
    }
    
}
const AUTH = {
    authenticate: async (token) => {
        return axios.post(domain + "/auth/authenticate", {token})
    }
}

API.STOCK = STOCK
API.AUTH = AUTH

export default API