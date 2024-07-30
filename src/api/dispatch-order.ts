import { api } from "@/lib/axios";


export interface dispatchOrderProps{
    orderId:string
}
export async function dispatchOrder({orderId}:dispatchOrderProps){
    await api.patch(`/orders/${orderId}/dispatch`)

}
