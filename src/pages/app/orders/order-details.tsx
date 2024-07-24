import { getOrderDetails } from "@/api/get-order-details";
import { OrderStatus } from "@/components/order-status";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { OrderDetailSekeleton } from "./order-details-skeleton";

export interface OrderDetailsProps {
    orderId: string;
    open: boolean
}
export function OrderDetails({ orderId, open }: OrderDetailsProps) {

    //enabled recebe um boolean, agora a requisição so sera feita se houver um enabled true
    //fizemos isso pois o Dialog executa o codigo mesmo sem estar aberto, então fazia requisições mesmo sem ser chamadas
    // ja que o react-query atualiza os dados quando desfocamos da pagina e voltamos
    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open,
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: {orderId}</DialogTitle>
                <DialogDescription>Detalhes</DialogDescription>
            </DialogHeader>
            {order ? (
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                    <OrderStatus status={order.status} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Client</TableCell>
                                <TableCell className="flex justify-end">
                                    {order.customer.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Telefone</TableCell>
                                <TableCell className="flex justify-end">
                                    {order.customer.phone ?? 'Não Informado'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Email</TableCell>
                                <TableCell className="flex justify-end">
                                    {order.customer.email}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Realizado há</TableCell>
                                <TableCell className="flex justify-end">
                                    {formatDistanceToNow(order.createdAt, {
                                        locale: ptBR,
                                        addSuffix: true
                                    })}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produtos</TableHead>
                                <TableHead className="text-right">Qtd</TableHead>
                                <TableHead className="text-right">Preço</TableHead>
                                <TableHead className="text-right">Subtotal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                order.orderItems.map(item => {
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.product.name}</TableCell>
                                            <TableCell className="text-right">{item.quantity}</TableCell>
                                            <TableCell className="text-right">{(item.priceInCents / 100).toLocaleString('pt-bt',{style:"currency",currency:'BRL'})}</TableCell>
                                            <TableCell className="text-right">{(item.priceInCents * item.quantity /100).toLocaleString('pt-bt',{style:"currency",currency:'BRL'})}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total do Pedido</TableCell>
                                <TableCell className="text-right font-medium">{(order.totalInCents / 100).toLocaleString('pt-bt',{style:"currency",currency:'BRL'})}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            ):(
                <OrderDetailSekeleton/>
            )}

        </DialogContent>
    )
}