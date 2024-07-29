import { http, HttpResponse } from 'msw'

import { getDayOrderAmountType } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  getDayOrderAmountType
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})