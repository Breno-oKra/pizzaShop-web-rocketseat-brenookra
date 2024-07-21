import {
    createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/app/dashboar";
import { SingIn } from "./pages/auth/singIn";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Dashboard /> }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: "/sing-in",
                element: <SingIn />,
            },
        ]
    }
  
]);
