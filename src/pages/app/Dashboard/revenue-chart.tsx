import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from "recharts"
import colors from 'tailwindcss/colors'
const data = [
    { date: "10/12", revenue: 200 },
    { date: "11/12", revenue: 400 },
    { date: "12/12", revenue: 100 },
    { date: "13/12", revenue: 3200 },
    { date: "14/12", revenue: 900 },
    { date: "15/01", revenue: 15380 },
    { date: "22/01", revenue: 3200 },
    { date: "29/01", revenue: 12200 },
]
export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={248}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                        <YAxis stroke="#888" axisLine={false} tickLine={false} width={88} tickFormatter={(value: number) => value.toLocaleString("pt-br", {
                            style: 'currency',
                            currency: 'BRL'
                        })} />
                        <CartesianGrid vertical={false} className="stroke-muted" />
                        <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']} />
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}