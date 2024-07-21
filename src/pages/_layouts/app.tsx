import { Outlet } from "react-router-dom"

/* Outlet é utilizado para adicionar um conteudo especifico com um children */
export function AppLayout(){
    return(
        <div>
            <h1>cabeçalho</h1>
            <div><Outlet/></div>
        </div>
    )
}