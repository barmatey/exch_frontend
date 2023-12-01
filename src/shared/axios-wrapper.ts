import axios from "axios"
import {BASE_URL} from "../core";


const axiosInstance = axios.create({
    baseURL: BASE_URL
})

async function axiosPost(url: string, data: object, config?: object) {
    if (!config) config = {}
    const options = Object.assign({}, config, {headers: getHeaders()})
    return await axiosInstance.post(url, data, options)
}

async function axiosGet(url: string, params?: object, headers?: object) {
    if (!headers) headers = getHeaders()
    if (!params) params = {}
    const options = Object.assign({}, {params}, {headers})

    console.log("Options: ", options)
    return await axiosInstance.get(url, options)
}

async function axiosPatch(url: string, data: object) {
    const options = {headers: getHeaders()}
    return await axiosInstance.patch(url, data, options)
}

async function axiosPatchWithFile(url: string, data: any, fileKey: string) {
    let options
    if (data[fileKey]) {
        options = {headers: getHeaders({'Content-Type': 'multipart/form-data'})}
    } else {
        options = {headers: getHeaders()}
    }
    return await axiosInstance.patch(url, data, options)
}

async function axiosPostWithFile(url: string, data: object) {
    const options = {headers: getHeaders({'Content-Type': 'multipart/form-data'})}
    console.log(data)
    return await axiosInstance.post(url, data, options)
}

async function axiosPut(url: string, data: object) {
    const options = {headers: getHeaders()}
    return await axiosInstance.put(url, data, options)
}

async function axiosDelete(url: string, data?: object) {
    const options: { headers: object, data?: object } = {headers: getHeaders()}
    if (typeof data !== 'undefined') {
        options.data = data
    }
    return await axiosInstance.delete(url, options)
}

function getHeaders(additionalHeaders = {}) {
    const token = getAuthToken()
    return Object.assign({}, token, additionalHeaders)
}

function getAuthToken() {
    // const {user} = useAuthStore()
    // const isLoggedIn = !!user?.data?.['auth_token']
    // if (isLoggedIn) {
    //     return {Authorization: `Token ${user.data['auth_token']}`}
    // } else {
    //     return {}
    // }
    return {}
}


export const axiosWrapper = {
    get: axiosGet,
    patch: axiosPatch,
    patchWithFile: axiosPatchWithFile,
    post: axiosPost,
    postWithFile: axiosPostWithFile,
    put: axiosPut,
    delete: axiosDelete,
}