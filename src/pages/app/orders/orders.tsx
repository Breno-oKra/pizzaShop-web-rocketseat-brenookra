import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
    const [searchParams,setSearchParams] = useSearchParams()

    // z.coerce.number() - tenta converte algo em numero
    // depois pegamos a page e diminuimos 1 porque
    // no page - 1, fizemos isso porque iremos enviar a primeira pagina pela url como 1
    // mas sabemos que em um array começa em 0 então na visualização sera 1 mas na função sera 0, por isso page -1
    // se a page não for informada, então sera 1
    // Math.max(page - 1,0) para garantir que o usuario coloque numero negativo no params
    const pageIndex = z.coerce
    .number()
    .transform((page) => Math.max(page - 1,0))
    .parse(searchParams.get('page') ?? '1') 

    //passamos o pageIndex como queryKey tambem pois a pagina depende dele para atualizar
    //se não passarmos, as informações não vão atualizar ja que a queryKey é somente orders
    // então o react-query não vai fazer outra requisição, ja com o pageIndex mudando, ele ira fazer
    const {data:result} = useQuery({
        queryKey:['orders',pageIndex],
        queryFn:() => getOrders({pageIndex}),
    })
    //usado para mudar o valor do params na url
    function handlePagination(pageIndex:number){
        setSearchParams(state => {
            state.set("page",(pageIndex + 1).toString())
            return state
        })
    }
    return (
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
                <div className="space-y-2.5">
                    <OrderTableFilters />
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>

                                <TableRow>
                                    <TableHead className="w-[64px]"></TableHead>
                                    <TableHead className="w-[140px]">Indentificador</TableHead>
                                    <TableHead className="w-[180px]">Realizado há</TableHead>
                                    <TableHead className="w-[140px]">Status</TableHead>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead className="w-[140px]">Total do pedido</TableHead>
                                    <TableHead className="w-[164px]"></TableHead>
                                    <TableHead className="w-[132px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result && result.orders.map(order => {
                                    return   <OrderTableRow key={order.orderId} order={order} />
                                })}
                              
                            </TableBody>
                        </Table>
                    </div>
                    {
                        result && (
                            <Pagination onPageChange={handlePagination} pageIndex={pageIndex} totalCount={result.meta.totalCount} perPage={result.meta.perPage}/>
                        )
                    }
                   
                </div>
            </div>
        </>
    )
}