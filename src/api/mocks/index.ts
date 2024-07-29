import { setupWorker } from 'msw/browser'

import { env } from '@/env'
import { signInMock } from './sign-in-mock'

//agora temos que chamar nossos mocks
export const worker = setupWorker(signInMock)

// o msw so vai se iniciar quando chamarmos essa função
// é para isso criamos um envMode para que o msw não se inicie caso a aplicação
// não esteja no ambiente de teste.
export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}