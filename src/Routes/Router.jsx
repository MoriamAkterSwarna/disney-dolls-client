import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Banner from "../Pages/Banner/Banner";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRouter from "./PrivateRouter";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Banner></Banner>
        },
       
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>

        },
        {
            path: '/addToy',
            element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
        },
        {
          path: '/myToy',
          element: <PrivateRouter><MyToys></MyToys></PrivateRouter>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://disney-dolls-server-snowy.vercel.app/addToy/${params.id}`)
        },
        {
          path: '/singleToy/:id',
          element: <PrivateRouter><SingleToy></SingleToy></PrivateRouter>,
          loader: ({params}) => fetch(`https://disney-dolls-server-snowy.vercel.app/addToy/${params.id}`)

        }

       

      ]
    },
  ]);

export default router;