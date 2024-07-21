import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
export function App() {

  return (
    <HelmetProvider>
      {/* %s significa que vai ser uma variavel, um nome que vai ser diferente em cada pagina, o resto sera igual */}
      {/* chamando em cada pagina  <Helmet title='title' /> com seu proprio title */}
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router}/>
    </HelmetProvider>
    
  )
}