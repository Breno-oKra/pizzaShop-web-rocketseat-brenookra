import { http, HttpResponse } from 'msw'

import { getMonthRevenueType } from '../get-mounth-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  getMonthRevenueType
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})