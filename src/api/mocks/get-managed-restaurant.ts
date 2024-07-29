import { http, HttpResponse } from 'msw'

import { GetManageRestaurantResponse } from '../get-managed-restaurants'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManageRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})