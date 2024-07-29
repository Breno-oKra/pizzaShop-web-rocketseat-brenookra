import { http, HttpResponse } from 'msw'

import { getMounthCanceledType } from '../get-mounth-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  getMounthCanceledType
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})