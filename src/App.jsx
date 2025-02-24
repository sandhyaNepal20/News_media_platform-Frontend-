import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./core/public/home"
const Home = lazy(() => import("./core/public/home"))

const Category = lazy(() => import("./core/public/caregories"))
const NewsDetail = lazy(() => import("./core/public/Newsdetails"))
const Search = lazy(() => import("./core/public/SearchResults"))

const MyAccount = lazy(() => import("./core/public/myaccount"))


// import Home from "./core/public/home"
const AdminDashboard = lazy(() => import("./core/public/admin-dashboard"))
const AddCategory = lazy(() => import("./core/private/news/add_news_category"))
const ViewNewsCategory = lazy(() => import("./core/private/news/view_news_category"))

const AddNews = lazy(() => import("./core/private/news/add_news"))
const ViewNews = lazy(() => import("./core/private/news/view_news"))

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
    { path: "/category/:categoryName", element: <Category /> },
    { path: "/newsdetail/:id", element: <NewsDetail /> },
    { path: "/search/:searchQuery", element: <Search /> },

    { path: "/myaccount", element: <MyAccount /> },
    { path: "/login", element: <Login /> },
    { path: "/admin-dashboard", element: <AdminDashboard /> },
    { path: "/add-category", element: <AddCategory /> },
    { path: "/view-category", element: <ViewNewsCategory /> },

    { path: "/add-news", element: <AddNews /> },

    { path: "/view-news", element: <ViewNews /> },

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
