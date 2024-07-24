import { api } from "@/lib/axios";


interface dispatchOrderProps{
    orderId:string
}
export async function dispatchOrder({orderId}:dispatchOrderProps){
    await api.patch(`/orders/${orderId}/dispatch`)

}
