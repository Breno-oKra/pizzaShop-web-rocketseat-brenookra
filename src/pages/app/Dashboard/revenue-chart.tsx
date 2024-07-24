import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import {  useState } from "react";
import { DateRange } from "react-day-picker";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Label } from "recharts"
import colors from 'tailwindcss/colors'


export function RevenueChart() {
    // subDays(new Date(),7) estamos pegando a data atual e subtraindo 7
    const [dateRange,setDateRange] = useState<DateRange | undefined>({
        from: subDays(new Date(),7),
        to: new Date()
    })
    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period',dateRange],
        queryFn: () => getDailyRevenueInPeriod({
            from:dateRange?.from,
            to:dateRange?.to
        }),
    })
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
                <div className="flex items-center gap-3 ">
                    <Label>Periodo</Label>
                    <DatePickerWithRange date={dateRange} onDateChange={setDateRange}/>
                </div>
            </CardHeader>
            <CardContent>
                {
                    dailyRevenueInPeriod && (
                        <ResponsiveContainer width="100%" height={248}>
                            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
                                <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                                <YAxis stroke="#888" axisLine={false} tickLine={false} width={88} tickFormatter={(value: number) => value.toLocaleString("pt-br", {
                                    style: 'currency',
                                    currency: 'BRL'
                                })} />
                                <CartesianGrid vertical={false} className="stroke-muted" />
                                <Line type="linear" strokeWidth={2} dataKey="receipt" stroke={colors.violet['500']} />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    )
                }
            </CardContent>
        </Card>

    )
}