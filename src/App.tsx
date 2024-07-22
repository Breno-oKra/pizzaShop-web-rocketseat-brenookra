import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Toaster } from 'sonner'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">

        {/* %s significa que vai ser uma variavel, um nome que vai ser diferente em cada pagina, o resto sera igual */}
        {/* chamando em cada pagina  <Helmet title='title' /> com seu proprio title */}
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          {/* o react query facilita requisições com hook do backend, ele memoriza as requisições entre components */}
          <RouterProvider router={router} />
        </QueryClientProvider>

      </ThemeProvider>
    </HelmetProvider>

  )
}