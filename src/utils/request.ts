import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_API, // url = base url + request url
  timeout: 120000, // request timeout
})

service.interceptors.request.use(
  config => config,
  error => {
    console.log(error)
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  },
)

export default service
