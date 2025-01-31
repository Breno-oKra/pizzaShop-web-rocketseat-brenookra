import { http, HttpResponse } from 'msw'

import { RegisterRestaurantProps } from '../register-restaurant'

export const registerRestaurantMock = http.post<never, RegisterRestaurantProps>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Breno Pizza') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)