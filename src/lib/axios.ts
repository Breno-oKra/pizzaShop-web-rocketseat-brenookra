import { env } from '@/env'
import axios from 'axios'

/* withCredentials:true faz com que os cookies do frontend seja enviados automaticamente ao backend */
export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials:true
})
/* hakcezinho para dar um delay no retorno da api, para simular um loading por exemplo*/
/* esse codigo tambem serve para customizar dados da requisição, esse config é o retorno, o header,body*/
if(env.VITE_ENABLE_API_DELAY){
    api.interceptors.request.use(async(config) => {
        await new Promise(resolve => setTimeout(resolve,1000))
        return config
    })
}