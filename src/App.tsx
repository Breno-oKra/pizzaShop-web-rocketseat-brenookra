import { RouterProvider } from 'react-router-dom'
import './global.css'
import { Toaster } from 'sonner'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'
export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">

        {/* %s significa que vai ser uma variavel, um nome que vai ser diferente em cada pagina, o resto sera igual */}
        {/* chamando em cada pagina  <Helmet title='title' /> com seu proprio title */}
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
     
      </ThemeProvider>
    </HelmetProvider>

  )
}