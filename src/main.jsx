import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Components/Layout/MainLayout.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import AddABook from "./Components/AddABook/AddABook.jsx";
import AllBooks from "./Components/AllBooks/AllBooks.jsx";
import MyBooks from "./Components/MyBooks/MyBooks.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-a-book",
        element: <PrivateRoutes><AddABook /></PrivateRoutes>,
      },
      {
        path: "/my-books",
        element: <PrivateRoutes><MyBooks /></PrivateRoutes>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
