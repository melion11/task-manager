import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { useMeQuery } from "@/features";
import { LoginPage, NotFoundPage, TodosPage } from "@/pages";
import { DragnDropPage } from "@/pages/dragnDropPage";
import { PageLoader, Toast, Header } from "@/widgets";

export const Layout = () => {
  return (
    <>
      <Toast />
      <Header />
      <Outlet />
    </>
  );
};

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
