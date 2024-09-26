import RouterProvider, { createBrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import NotFound from "../components/NotFound";
import NotFoundBlock from "../pages/NotFoundBlock";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NotFound />,
      children: [{ path: "not-found", element: <NotFoundBlock /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};
