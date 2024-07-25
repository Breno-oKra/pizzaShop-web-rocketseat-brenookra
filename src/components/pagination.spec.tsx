import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

// vi é uma global do vitest
//isso é uma Spie
const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Pagina 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 items(s)')).toBeInTheDocument()
  })
  // aqui tentanto verificar o button de proxima pagina
  it('should be able to navigate to the next page', async () => {
    // a libary @testing-library/user-event permite fazer evetos como um usuario
    //usamos isso para simular um clique de usuario
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    //getByRole pega o componente pelo seu cargo, button, a, input etc
    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima Pagina',
    })

    await user.click(nextPageButton)

    // aqui dizemos que esperamos que onPageChangeCallback tenha sido chamado
    
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})