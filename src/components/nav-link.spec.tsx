import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        //aqui estava dando erro pois não estamos dentro do contextRouter
        // então usamos o MemoryRouter que armazena a rota ativa em memoria
        // e não na url como é no contextRouter, entao conseguimos acessar
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    /* expect(wrapper.getByText('About').dataset.current).toEqual('true')
    expect(wrapper.getByText('Home').dataset.current).toEqual('false') */
  })
})