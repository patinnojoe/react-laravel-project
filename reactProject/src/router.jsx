import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, SignUp, Surveys } from "./views";
import { DefaultLayout, GuestLayout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
