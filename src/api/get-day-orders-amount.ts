import { api } from "@/lib/axios";

export interface getDayOrderAmountType{
    amount:number
    diffFromYesterday:number
}
export async function getDayOrderAmount(){
    const response = await api.get<getDayOrderAmountType>('/metrics/day-orders-amount')
    return response.data
}