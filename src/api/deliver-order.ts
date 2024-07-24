import { api } from "@/lib/axios";


interface deliveOrderProps{
    orderId:string
}
export async function deliveOrder({orderId}:deliveOrderProps){
    await api.patch(`/orders/${orderId}/deliver`)

}
