import { Outlet } from "react-router-dom"

/* Outlet é utilizado para adicionar um conteudo especifico com um children */
export function AuthLayout(){
    return(
        <div>
            <h1>LogaAi</h1>
            <div><Outlet/></div>
        </div>
    )
}