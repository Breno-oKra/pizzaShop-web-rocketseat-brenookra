import { api } from "@/lib/axios";


interface cancelOrderProps{
    orderId:string
}
export async function cancelOrder({orderId}:cancelOrderProps){
    await api.patch(`/orders/${orderId}/cancel`)

}
