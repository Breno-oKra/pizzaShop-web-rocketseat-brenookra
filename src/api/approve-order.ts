import { api } from "@/lib/axios";


interface approveOrderProps{
    orderId:string
}
export async function approveOrder({orderId}:approveOrderProps){
    await api.patch(`/orders/${orderId}/approve`)

}
