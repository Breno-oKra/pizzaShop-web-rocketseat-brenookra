import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { OrderTableSkeleton } from "./order-table-skeleton";

export function Orders() {
    const [searchParams,setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    const pageIndex = z.coerce
    .number()
    .transform((page) => Math.max(page - 1,0))
    .parse(searchParams.get('page') ?? '1') 

    //lembrando que todo parametro deve esta no queryKey para que seja atualizado
    const {data:result,isLoading} = useQuery({
        queryKey:['orders',pageIndex,orderId,customerName,status],
        queryFn:() => getOrders({pageIndex,orderId,customerName,status:status == 'all'? null : status}),
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
                                {isLoading && <OrderTableSkeleton/>}
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