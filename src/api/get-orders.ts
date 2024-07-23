import { api } from "@/lib/axios";

export interface getOrdersType{
    orders: {
        orderId: string;
        createdAt: string
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }[];
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    };
}

export async function getOrders(){
    const response = await api.get<getOrdersType>('/orders',{
        params:{
            pageIndex:0,

        }
    })
    return response.data
}

