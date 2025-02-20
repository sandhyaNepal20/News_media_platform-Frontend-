import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./core/public/home"
const Home = lazy(() => import("./core/public/home"))
const Category = lazy(() => import("./core/public/caregories"))
const NewsDetail = lazy(() => import("./core/public/Newsdetails"))

const MyAccount = lazy(() => import("./core/public/myaccount"))


// import Home from "./core/public/home"
const AdminDashboard = lazy(() => import("./core/public/admin-dashboard"))

// import Login from "./core/public/login"
const Login = lazy(() => import("./core/public/login"))

// import LoginCustomer from "./core/public/login-customer"
const LoginCustomer = lazy(() => import("./core/public/login-customer"))

// import Register from "./core/public/register"
const Register = lazy(() => import("./core/public/register"))

// import Layout from "./core/private/layout"
const Layout = lazy(() => import("./core/private/layout"))



function App() {


  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/category", element: <Category /> },
    { path: "/newsdetail", element: <NewsDetail /> },

    { path: "/myaccount", element: <MyAccount /> },


    { path: "/login", element: <Login /> },
    { path: "/admin-dashboard", element: <AdminDashboard /> },

    { path: "/login-customer", element: <LoginCustomer /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <>unauthorized</> }
  ]

  const privateRoutes = [
    { path: "/admin", element: <Layout /> },
    { path: "*", element: <>Page not found</> }
  ]

  // LOGIN logic TODO
  const isAdmin = false;
  const routes = isAdmin ? privateRoutes : publicRoutes
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  )
}

export default App
