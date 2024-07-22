import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input type="text" placeholder="Id do Pedido" className="h-8 w-auto" />
            <Input type="text" placeholder="Nome do Cliente" className="h-8 w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em Preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" variant="secondary" size="xs" >
                <Search className="mr-2 h-4 w-4"/>
                Filtrar Resultados
            </Button>
            <Button type="button" variant="outline" size="xs" >
                <X className="mr-2 h-4 w-4"/>
                Remover Filtros
            </Button>
        </form>
    )
}