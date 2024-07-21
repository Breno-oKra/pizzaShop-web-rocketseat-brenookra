import {
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/app/dashboar";
import { SingIn } from "./pages/auth/singIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/sing-in",
    element: <SingIn/>,
  },
]);
