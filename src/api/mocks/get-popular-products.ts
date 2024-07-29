import { http, HttpResponse } from 'msw'

import { getPopularProdutsType } from '../get-popular-products'

//lembrando da tipagem
// never ->PathParams, 
// never -> DefaultBodyType
// getPopularProdutsType -> formato do retorno enviado
export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProdutsType
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 5 },
    { product: 'Pizza 02', amount: 3 },
    { product: 'Pizza 03', amount: 2 },
    { product: 'Pizza 04', amount: 7 },
    { product: 'Pizza 05', amount: 4 },
  ])
})
 const fgh = http.get('',() => {})
