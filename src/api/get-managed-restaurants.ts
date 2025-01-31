import { api } from "@/lib/axios";

export interface GetManageRestaurantResponse{
    id:string;
    name:string;
    createdAt: Date | null
    updatedAt: Date | null
    description:string | null;
    managerId:string | null
}
export async function getManageRestaurant(){
    const response = await api.get<GetManageRestaurantResponse>('/managed-restaurant')
    return response.data
}

// pesquisar bibliotecas que copiam o tipo que vem do backend