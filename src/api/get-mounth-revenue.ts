import { api } from "@/lib/axios";

export interface getMonthRevenueType{
    receipt:number
    diffFromLastMonth:number
}
export async function getMonthRevenue(){
    const response = await api.get<getMonthRevenueType>('/metrics/month-receipt')
    return response.data
}