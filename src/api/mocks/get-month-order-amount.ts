import { http, HttpResponse } from 'msw'

import { getMonthOrdersAmountType } from '../get-mount-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  getMonthOrdersAmountType
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})