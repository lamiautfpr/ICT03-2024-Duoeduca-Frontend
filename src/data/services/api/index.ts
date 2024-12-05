'use client'

import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'

class HTTPAdapter {

  public api: AxiosInstance

  constructor() {
    this.api = this.initializeAPI()
  }

  initializeAPI() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    })
  }

  authenticate() {
    this.api.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = getCookie('accessToken') as string

        if (!token) {
          window.location.replace('/invalid-token')
        }

        if (token && config.headers) {
          config.headers.Authorization = `${token}`
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
}

export { HTTPAdapter }
