import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { getOrdersType } from "@/api/get-orders";
interface OrderTableRowProps {
    order: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
}
export function OrderTableRow({ order }: OrderTableRowProps) {
    //criamos isDetailOpen pois o Dialog executa o codigo mesmo sem estar aberto, então fazia requisições mesmo sem ser chamadas
    // ja que o react-query atualiza os dados quando desfocamos da pagina e voltamos
    const [isDetailsOpen, setDetailsOpen] = useState(false)
    const queryClient = useQueryClient()
    const { mutateAsync: cancelOrderFn } = useMutation({
        mutationFn: cancelOrder,
        async onSuccess(_,{orderId}){
            //nesse caso usamos getQueriesData porque a lista esta distribuida em ['orders',pageIndex,orderId,customerName,status]
            // então buscamos a lista completa e informamos o valor em comum em todas elas ['orders']
            const ordersListCche = queryClient.getQueriesData<getOrdersType>({
                queryKey:['orders'],
            })
            // ordersListCche retorna [QueryKey, getOrdersType | undefined][], então fazemos um forEach para manipula-los
            ordersListCche.forEach(([cacheKey,cacheData]) => {
                if(!cacheData){
                    return
                }
                // aqui setamos a queryData, então passamos as cacheKey que são referente objeto alterado
                // mantemos os dados e alteramos so o campo que queremos
                queryClient.setQueryData<getOrdersType>(cacheKey,{
                    ...cacheData,
                    orders:cacheData.orders.map((order) => {
                        if(order.orderId === orderId){
                            return {...order,status:"canceled"}
                        }
                        return order
                    })
                })
            })
        }
    })
    return (

        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setDetailsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs" >
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
                </Dialog>

            </TableCell>
            <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
            <TableCell className="text-muted-foreground"> {formatDistanceToNow(order.createdAt, {
                locale: ptBR,
                addSuffix: true
            })}</TableCell>
            <TableCell>
                <OrderStatus status={order.status} />
            </TableCell>
            <TableCell className="font-medium">{order.customerName}</TableCell>
            <TableCell className="font-medium">
                {(order.total / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </TableCell>
            <TableCell>
                <Button variant="outline" size="xs"><ArrowRight className="mr-2 h-3 w-3" /> Aprovar</Button>
            </TableCell>
            <TableCell>
                <Button
                    disabled={!['pending', 'processing'].includes(order.status)}
                    variant="ghost" size="xs"
                    onClick={() => cancelOrderFn({ orderId:order.orderId})}
                >
                    <X className="mr-2 h-3 w-3" /> Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}