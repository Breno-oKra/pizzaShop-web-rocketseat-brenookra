import {
    createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/app/Dashboard/dashboar";
import { SingIn } from "./pages/auth/singIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SingUp } from "./pages/auth/singUp";
import { Orders } from "./pages/app/orders/orders";
import { NotFound } from "./pages/404";
import { ErrorPage } from "./pages/error";

//errorElement:<NotFound/>, lado ruim de usar ele
// caso de algum erro em qualquer componente, exemplo, um erro em um get para dados iniciais
// vai aparecer a pagina 404, mesmo não sendo um erro de rota
// então usamos ele para estilar uma pagina de error da aplicação
export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        /* errorElement:<NotFound/>, */
        errorElement:<ErrorPage/>,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/orders', element: <Orders /> }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: "/sign-in",
                element: <SingIn />,
            },
            {
                path: "/sign-up",
                element: <SingUp />,
            },
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }
  
]);
