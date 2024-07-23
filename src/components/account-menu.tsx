import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";

import { getManageRestaurant } from "@/api/get-managed-restaurants";
import { Skeleton } from "./ui/skeleton";

export function AccountMenu() {

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile
    })
    /* isLoading verifica se uma informação esta sendo carregada, assim não precisamos criar consts com verificações */
    const { data: managedRestaurant, isLoading: isLoadingManageRestaurant } = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManageRestaurant,
    })
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    {isLoadingManageRestaurant ? (
                        <Skeleton className="h-4 w-40" />
                    ) : managedRestaurant?.name}
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    {isLoadingProfile? (
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-32"/>
                            <Skeleton className="h-3 w-24"/>
                        </div>
                    ) : <>
                    <span>{profile?.name}</span>
                    <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span></>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
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