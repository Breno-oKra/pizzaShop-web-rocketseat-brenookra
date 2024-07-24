import { Link, useRouteError } from "react-router-dom";

export function ErrorPage(){
    const error = useRouteError() as Error
    
    return(
        <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Algo de Errado não está certo</h1>
        <p className="text-accent-foreground">
            algo errado não esta certo, veja detalhes detalhado abaixo em baixo
        </p>
        <pre>{error?.message || JSON.stringify(error)}</pre>
        <p className="text-accent-foreground">
            Voltar para o <Link to="/" className="text-sky-400 dark:text-sky-600 ">Dashborad</Link>
        </p>
    </div>
    )
}