import { env } from '@/env'
import axios from 'axios'

/* withCredentials:true faz com que os cookies do frontend seja enviados automaticamente ao backend */
export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials:true
})