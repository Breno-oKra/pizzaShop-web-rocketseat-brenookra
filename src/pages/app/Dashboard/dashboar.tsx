import { Helmet } from 'react-helmet-async'
import { MounthRevenueCard } from './mounth-revenue.-card'
import { MounthOrdersAmountCard } from './mounth-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MounthCanceledOrdersCard } from './mount-canceled-orders-amount'
export function Dashboard() {
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
            </div>
        </>
    )
}