import { api } from "@/lib/axios";


export interface deliveOrderProps{
    orderId:string
}
export async function deliveOrder({orderId}:deliveOrderProps){
    await api.patch(`/orders/${orderId}/deliver`)

}
