import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SingIn } from './singIn'

describe('SingIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SingIn />, {
    //lembrando que precisamos colocar os contextos que esse codigo vai depender
    // no caso o MemoryRouter para acessar a rota, HelmetProvider e o QueryClientProvider
    // em SingIn usamos o useMutation que nessecita esta dentro do contexto QueryClientProvider que esta em App.tsx
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={['/sign-in?email=johndoe@example.com']}
            >
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@example.com')
  })
})