import axios from "axios"

// const baseurl = "https://fakestoreapi.com/products"
const baseurl = "http://127.0.0.1:8000"

const http = axios.create({
    baseURL: baseurl,
})
export default http