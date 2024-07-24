import { Helmet } from 'react-helmet-async'
import { MounthRevenueCard } from './mounth-revenue.-card'
import { MounthOrdersAmountCard } from './mounth-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MounthCanceledOrdersCard } from './mount-canceled-orders-amount'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'
export function Dashboard() {
    //simular erro para gerar Page Error
    /* throw new Error('errando no error, aplicação dando error, conserter o error') */
    return (
        <>
            <Helmet title='Dashboard' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <MounthRevenueCard/>
                    <MounthOrdersAmountCard/>
                    <DayOrdersAmountCard/>
                    <MounthCanceledOrdersCard/>
                </div>
                <div className='grid grid-cols-9 gap-4'>
                    <RevenueChart/>
                    <PopularProductsChart/>
                </div>
            </div>
        </>
    )
}