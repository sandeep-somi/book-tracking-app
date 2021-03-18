import axios from 'axios'





// set base url
// axios.defaults.baseURL = API_URL


axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export function getAPI(endPoint, params) {
    return axios.get(endPoint, {
        params: {
            ...params
        }
    })
}