
import {render} from '@testing-library/react'
import { OrderStatus } from './order-status'
describe('Order Status', () => {
    it('should display the right text when order status is pending', () => {
        const wrapper = render(<OrderStatus status="pending" />)
        // mostra todo o codigo do componente
        /* wrapper.debug() */
        //procura um texto no componente
        const findText = wrapper.getByText('Pendente')

        //aqui pegamos um idTestId que foi adicionado no componente para fazer testes
        const badgeElement = wrapper.getByTestId('badge')
        //isso retorna o html do que foi procurado
        console.log(badgeElement.outerHTML)
        //isso verifica se oque foi procurado esta em tela no html
        /* expect(findText).toBeInTheDocument() */
        //verifica se tem a classe informada
        /* expect(badgeElement).toHaveClass('bg-slate-400') */
      })
    
      it('should display the right text when order status is canceled', () => {
        const wrapper = render(<OrderStatus status="canceled" />)
    
        const statusText = wrapper.getByText('Cancelado')
        const badgeElement = wrapper.getByTestId('badge')
    
        /* expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500') */
      })
    
      it('should display the right text when order status is delivering', () => {
        const wrapper = render(<OrderStatus status="delivering" />)
    
        const statusText = wrapper.getByText('Em entrega')
        const badgeElement = wrapper.getByTestId('badge')
    
        /* expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500') */
      })
    
      it('should display the right text when order status is processing', () => {
        const wrapper = render(<OrderStatus status="processing" />)
    
        const statusText = wrapper.getByText('Em preparo')
        const badgeElement = wrapper.getByTestId('badge')
    
       /*  expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500') */
      })
    
      it('should display the right text when order status is delivered', () => {
        const wrapper = render(<OrderStatus status="delivered" />)
    
        const statusText = wrapper.getByText('Entregue')
        const badgeElement = wrapper.getByTestId('badge')
    
        /* expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-emerald-500') */
      })
})