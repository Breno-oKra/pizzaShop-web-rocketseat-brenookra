import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Utensils } from "lucide-react";
export function MounthOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-base font-semibold'>Pedidos (mês)</CardTitle>
                <Utensils className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='spacy-y-1'>
                <span className='text-2xl font-bold tracking-tight'>523</span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-emerald-500 dark:text-emerald-400'>+ 12% </span> em relação ao mês passado
                </p>
            </CardContent>
        </Card>
    )
}