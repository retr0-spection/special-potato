import axios from "axios"

const domain = "https://espazaserver.azurewebsites.net/api"  

const API = {}

const STOCK = {
    get: async (config) => {
        return axios.get(domain + '/stock', config)
    },
    getById: async (id, config) => {
        return axios.get(domain + `/stock/${id}`, config)
    },
    getByCategory: async (category, config) => {
        return axios.get(domain + `/stock/category/${category}`, config)
    },
    getByName: async (name, config) => {
        return axios.get(domain + `/stock/search/${name}`, config)
    },
    changeById: async (id,payload, config) => {
        return axios.post(domain + `/stock/${id}`, payload, config)
    },
    add: async (payload, config) => {
        return axios.post(domain + `/stock/`, payload, config)
    }
    
}

const FEED = {
    get: async (config) => {
        return axios.get(domain + '/feed', config)
    },
    getById: async (id, config) => {
        return axios.get(domain + `/feed/${id}`, config)
    },
    filter: async (filter, config) => {
        return axios.get(domain + `/feed/category/${filter}`, config)
    },
    
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
    delete: async (id, config) => {
        return axios.delete(domain + `/user/${id}`, config)
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
    create:async (payload, config) => {
        return axios.post(domain + `/order`, payload,config)
    },
}

API.STOCK = STOCK
API.AUTH = AUTH
API.USER = USER
API.ORDER = ORDER
API.FEED = FEED

export default API