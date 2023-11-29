import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { LoginPage, NotFoundPage, TodosPage } from "@/pages";

function PrivateRoutes() {

  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: '/*',
            element: <NotFoundPage />,
          },
          {
            path: '/',
            element: <TodosPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      }
    ],
  },
])

export const Router = () => {

  return <RouterProvider router={router} />
}