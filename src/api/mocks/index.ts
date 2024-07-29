import { setupWorker } from 'msw/browser'

import { env } from '@/env'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-order-amount'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders'
import { getMonthRevenueMock } from './get-month-revenue'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getPopularProductsMock } from './get-popular-products'

//agora temos que chamar nossos mocks
export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

// o msw so vai se iniciar quando chamarmos essa função
// é para isso criamos um envMode para que o msw não se inicie caso a aplicação
// não esteja no ambiente de teste.
export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}