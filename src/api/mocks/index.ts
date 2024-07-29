import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const worker = setupWorker()

// o msw so vai se iniciar quando chamarmos essa função
// é para isso criamos um envMode para que o msw não se inicie caso a aplicação
// não esteja no ambiente de teste.
export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}