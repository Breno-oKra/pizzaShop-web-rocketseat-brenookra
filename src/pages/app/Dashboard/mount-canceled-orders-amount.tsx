import { getMounthCanceled } from "@/api/get-mounth-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
export function MounthCanceledOrdersCard() {
    const { data: mounthCanceled } = useQuery({
        queryFn: getMounthCanceled,
        queryKey: ['metrics', 'month-canceled-orders-amount']
    })
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-base font-semibold'>Cacelamentos (mês)</CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='spacy-y-1'>
                {mounthCanceled && (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>{mounthCanceled.amount.toLocaleString('pt-BR')}</span>
                        <p className='text-xs text-muted-foreground'>
                            {mounthCanceled.diffFromLastMonth < 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'> {mounthCanceled.diffFromLastMonth}% </span> em relação a ontem
                                </>
                            ) : (
                                <>
                                    <span className='text-rose-500 dark:text-rose-400'> +{mounthCanceled.diffFromLastMonth}% </span> em relação a ontem
                                </>
                            )}
                        </p>
                    </>
                )}
               
            </CardContent>
        </Card>
    )
}