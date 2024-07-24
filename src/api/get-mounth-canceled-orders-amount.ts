import { api } from "@/lib/axios";

export interface getMounthCanceledType{
    amount:number
    diffFromLastMonth:number
}
export async function getMounthCanceled(){
    const response = await api.get<getMounthCanceledType>('/metrics/month-canceled-orders-amount')
    return response.data
}