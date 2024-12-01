import axios from 'axios'

export const axiosReq = axios.create(
  {
    baseURL: '/api/v1'
  }
)