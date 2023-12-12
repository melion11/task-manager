import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "@/components/Layout";
import { useMeQuery } from "@/features";
import { LoginPage, NotFoundPage, TodosPage } from "@/pages";
import { DragnDropPage } from "@/pages/dragnDropPage";
import { PageLoader } from "@/widgets";

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery();

  const isAuthenticated = data?.resultCode;

  if (isLoading) return <PageLoader />;

  return isAuthenticated === 0 ? <Outlet /> : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/*",
            element: <NotFoundPage />,
          },
          {
            path: "/",
            element: <TodosPage />,
          },
          {
            path: "/dragndrop",
            element: <DragnDropPage />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const Router = () => {
  const {} = useMeQuery();

  return <RouterProvider router={router} />;
};
