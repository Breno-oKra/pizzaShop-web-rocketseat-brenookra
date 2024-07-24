import { getPopularProduts } from "@/api/get-popular-products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Loader2 } from "lucide-react";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts"
import colors from 'tailwindcss/colors'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500]
]
export function PopularProductsChart() {
  const { data: popularProduts } = useQuery({
    queryFn: getPopularProduts,
    queryKey: ['metrics', 'popular-products']
  })
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium">Produtos Populares</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {
          popularProduts ? (
            <ResponsiveContainer width="100%" height={248}>
              <PieChart style={{ fontSize: 12 }}>

                <Pie data={popularProduts}
                  dataKey="amount"
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  labelLine={false}
                  /* codigo label pegado so proprio site  */
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180
                    const radius = 12 + innerRadius + (outerRadius - innerRadius)
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)

                    return (
                      <text
                        x={x}
                        y={y}
                        className="fill-muted-foreground text-xs"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        {popularProduts[index].product.length > 12
                          ? popularProduts[index].product.substring(0, 12).concat('...')
                          : popularProduts[index].product}{' '}
                        ({value})
                      </text>
                    )
                  }}
                >
                  {popularProduts.map((_, index) => {
                    return <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80" />
                  })}
                </Pie>

              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 text-muted-foreground animate-spin"/>
            </div>
          )
        }
      </CardContent>
    </Card>

  )
}