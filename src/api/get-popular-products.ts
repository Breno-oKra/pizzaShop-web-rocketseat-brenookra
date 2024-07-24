import { api } from "@/lib/axios";

export type getPopularProdutsType = {
    product:string;
    amount:number
}[]
export async function getPopularProduts(){
    const response = await api.get<getPopularProdutsType>('/metrics/popular-products')
    return response.data
}