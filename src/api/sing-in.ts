import { api } from "@/lib/axios"

export interface SingInProps{
    email: string;
}
export async function singIn({email}:SingInProps){
    await api.post('/authenticate',{email})
}