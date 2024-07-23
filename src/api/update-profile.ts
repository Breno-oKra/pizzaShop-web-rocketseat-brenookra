import { api } from "@/lib/axios"

export interface UpdateProfileProps{
    name:string;
    description:string | null

}
export async function updateProfile({name,description}:UpdateProfileProps){
    /* throw new Error()  #simular error */
    await api.put('/profile',{name,description})
} 


/* # simulando um error para teste */
/* export async function updateProfile({name,description}:UpdateProfileProps){
    await new Promise((resolve,reject) => {
        setTimeout(reject,3000)
    })
} */