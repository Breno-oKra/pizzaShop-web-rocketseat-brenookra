import { http, HttpResponse } from 'msw'

import { SingInProps } from '../sing-in'

//aqui tipamos o post de acordo com o proprio arquivo, coloca post: <PathParams, DefaultBodyType, undefined, etc  
// então em pathParams colocamos never, e o body colocamos a tipagem da page SignIn
export const signInMock = http.post<never, SingInProps>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'brenookra@gmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)