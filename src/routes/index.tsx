import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import AuthorizedLayout from "../layout/AuthorizedLayout";
import { UnauthorizedLayout } from "../layout/UnauthorizedLayout";
import Login from "../views/Public/Login";
import SignUp from "../views/Public/SingUp";
import Home from "../views/Private/Home";

const router = createBrowserRouter([
  {
    element: <AuthGuard />,
    children: [
      {
        element: <UnauthorizedLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <SignUp /> },
        ],
      },
    ],
  },
  {
    element: <AuthGuard isPrivate />,
    children: [
      {
        element: <AuthorizedLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
