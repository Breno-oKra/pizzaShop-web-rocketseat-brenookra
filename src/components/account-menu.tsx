import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger,DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";

import { getManageRestaurant } from "@/api/get-managed-restaurants";

export function AccountMenu(){

    /* 
        aqui entra a vantagem de usar react-query
        usando queryKey que é um campo obrigatorio, fazemos com que
        o react-query não refaça essa mesma requicisão em outra pagina
        ex: se precisar acessar o perfil em outra pagina de aplicação
        usamos a mesma queryKey, assim o react-query vai perceber que ja fizemos essa requisição
        então vai usar o retorno dela em cash para exibila novamente sem a precisão de fazer uma nova requisição
    */
    const {data:profile} = useQuery({
        queryKey:['profile'],
        queryFn:getProfile
    })
    const {data:managedRestaurant} = useQuery({
        queryKey:['manager-restaurant'],
        queryFn:getManageRestaurant,
    })
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none"> {managedRestaurant?.name} <ChevronDown className="w-4 h-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col"><span>{profile?.name}</span><span className="text-xs font-normal text-muted-foreground">{profile?.email}</span></DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="mr-2 h-4 w-4" />
                    <span>Perfil da Loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}