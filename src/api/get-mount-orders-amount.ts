import { api } from "@/lib/axios";

export interface getMonthOrdersAmountType{
    amount:number
    diffFromLastMonth:number
}
export async function getMonthOrdersAmount(){
    const response = await api.get<getMonthOrdersAmountType>('/metrics/month-orders-amount')
    return response.data
}