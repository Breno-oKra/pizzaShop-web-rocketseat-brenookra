import { api } from "@/lib/axios";

export interface DayleRevenueType {
    from?: Date
    to?: Date
}
export type getDailyRevenueInPeriodType = {
    data: string;
    receipt: number
}[]
export async function getDailyRevenueInPeriod({ from, to }: DayleRevenueType) {
    const response = await api.get<getDailyRevenueInPeriodType>('/metrics/daily-receipt-in-period',
        {
            params: {
                from,
                to
            }
        })
    return response.data
}