import { RouterProvider } from 'react-router-dom'
import { Button } from './components/ui/button'
import './global.css'
import { router } from './routes'
export function App() {

  return (
    <RouterProvider router={router}/>
  )
}