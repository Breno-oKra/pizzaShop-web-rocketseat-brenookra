import { api } from "@/lib/axios"

export interface RegisterRestaurantProps{
    restaurantName:string;
    managerName:string
    email: string;
    phone:string
}
export async function RegisterRestaurant({restaurantName,managerName,email,phone}:RegisterRestaurantProps){
    await api.post('/restaurants',{restaurantName,managerName,email,phone})
}