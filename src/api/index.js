import axios from "axios"

const domain = 'http://localhost:3001/api' // "https://espazaserver.azurewebsites.net/api" 

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


const USER = {
    getAll: async (config) => {
        return axios.get(domain + '/user', config)
    },
    getById: async (id, config) => {
        return axios.get(domain + `/user/${id}`, config)
    },
    modify: async (id,payload, config) => {
        return axios.post(domain + `/user/${id}`, payload, config)
    },
}

const ORDER = {
    getAll: async (config) => {
        return axios.get(domain + '/order', config)
    },
    getById: async (id, config) => {
        return axios.get(domain + `/order/${id}`, config)
    },
    getByUserId: async (config) => {
        return axios.get(domain + `/order/user/`, config)
    },
}

API.STOCK = STOCK
API.AUTH = AUTH
API.USER = USER
API.ORDER = ORDER

export default API