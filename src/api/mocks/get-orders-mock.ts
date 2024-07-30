import { http, HttpResponse } from 'msw'

import type { getOrdersType} from '../get-orders'

//explicado no readme
type Orders = getOrdersType['orders']
//explicado no readme
type OrderStatus = getOrdersType['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    // aqui dizemos
    // 1 % 5 = 1, 2 % 5 = 2, 3 % 5 = 3, 4 % 5 = 4 5 % 5 = 0
    // agora digamos que o i seja 6, não existe posição 6
    // mas, 6 % 5 = 1, ou seja vai ficar voltando para o 1
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<never, never, getOrdersType>(
  '/orders',
  async ({ request }) => {
    //aqui criamos uma url ja que request.url vem como string, e teriamos de dar um split para pegarmos os params
    const { searchParams,href,pathname } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)