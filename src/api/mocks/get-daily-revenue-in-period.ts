import { http, HttpResponse } from 'msw'

import { getDailyRevenueInPeriodType } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  getDailyRevenueInPeriodType
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { data: '01/01/2024', receipt: 2450 },
    { data: '02/01/2024', receipt: 830 },
    { data: '03/01/2024', receipt: 800 },
    { data: '04/01/2024', receipt: 548 },
    { data: '05/01/2024', receipt: 422 },
    { data: '06/01/2024', receipt: 790 },
    { data: '07/01/2024', receipt: 1000 },
  ])
})