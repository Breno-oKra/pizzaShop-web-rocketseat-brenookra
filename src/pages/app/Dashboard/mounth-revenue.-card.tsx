import { getMonthRevenue } from "@/api/get-mounth-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MounthRevenueCard() {
    const { data: mounthRevenue } = useQuery({
        queryFn: getMonthRevenue,
        queryKey: ['metrics', 'month-revenue']
    })
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-base font-semibold'>Receita total (mês)</CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='spacy-y-1'>
                {mounthRevenue && (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>{(mounthRevenue.receipt / 100).toLocaleString('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        })}</span>
                        <p className='text-xs text-muted-foreground'>
                            {mounthRevenue.diffFromLastMonth >= 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'> +{mounthRevenue.diffFromLastMonth}% </span> em relação ao mês passado
                                </>
                            ) : (
                                <>
                                    <span className='text-rose-500 dark:text-rose-400'> {mounthRevenue.diffFromLastMonth}% </span> em relação ao mês passado
                                </>
                            )}
                        </p>
                    </>
                )}
             
            </CardContent>
        </Card>
    )
}