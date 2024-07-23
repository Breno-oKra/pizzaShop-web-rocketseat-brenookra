import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getManageRestaurant, GetManageRestaurantResponse } from "@/api/get-managed-restaurants";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string()
})
type StoreProfileSchemaType = z.infer<typeof storeProfileSchema>
export function StoreProfileDialog() {
    const queryClient = useQueryClient()
    const { data: managedRestaurant } = useQuery({
        queryKey: ['manager-restaurant'],
        queryFn: getManageRestaurant,
        staleTime: Infinity
    })
    const { register, handleSubmit, formState: {
        isSubmitting
    } } = useForm<StoreProfileSchemaType>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })
    /* fazendo a informação atualizar em uma requisição ja feita */
    /* 
        usamos onSuccess para passar as informações novas
        depois usamos queryClient para pegar as informações ja existente e passamos a queryKey
        depois setamos as novas informações passando tambem a queryKey correspondente
    */
    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile,
        onSuccess(_, { name, description }) {
            const cached = queryClient.getQueryData<GetManageRestaurantResponse>(['manager-restaurant'])
            if (cached) {
                queryClient.setQueryData<GetManageRestaurantResponse>(['manager-restaurant'], {
                    ...cached,
                    name,
                    description,
                })
            }
        },
    })
    async function handleUpdatedProfile(data: StoreProfileSchemaType) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description
            })
            toast.success("Perfil atualizado")
        } catch {
            toast.error("Falha ao atualizar o perfil")
        }
    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da Loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdatedProfile)} >
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">Nome</Label>
                        <Input className="col-span-3" id='name' {...register('name')} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">Descrição</Label>
                        <Textarea className="col-span-3" id='description' {...register('description')} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button disabled={isSubmitting} variant='ghost' type="button">Cancelar</Button>
                    </DialogClose>

                    <Button disabled={isSubmitting} variant='success' type="submit">Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}