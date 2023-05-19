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
            element: <AddToy></AddToy>
        },
        {
          path: '/myToy',
          element: <MyToys></MyToys>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        },
        {
          path: '/singleToy/:id',
          element: <SingleToy></SingleToy>,
          loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)

        }

       

      ]
    },
  ]);

export default router;